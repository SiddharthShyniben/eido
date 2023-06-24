const hjson = require('hjson');
const { readFileSync } = require('fs');
const { createShikiHighlighter, runTwoSlash, renderCodeToHTML } = require('shiki-twoslash');
const cheerio = require('cheerio');

const content = readFileSync('./tutorial.hjson', 'utf8');

const {instructions, codeRaw, docs, ...rest} = hjson.parse(content);

const steps = [];
const undos = [];

const init = 'init';

module.exports = async () => {
	const highlighter = await createShikiHighlighter({ theme: "dark-plus" })

	function makeCode() {
		const twoslash = runTwoSlash(codeRaw, "ts", {})
		const html = renderCodeToHTML(twoslash.code, "ts", { twoslash: true }, {}, highlighter, twoslash)

		const $ = cheerio.load(html);

		$('data-lsp').each((_, el) => {
			const content = el.attribs.lsp;
			el.attribs.lsp = highlighter.codeToHtml(content, {lang: 'typescript'});
		})

		return $('.shiki .code-container').html();
	}

	const command_map = {
		focus: (...args) => `focusLine(${args.join(', ')})`,
		'focus*': (...args) => `focusToken([${args.join(', ')}])`,
		defocus: () => 'defocus()',
		remove: (...args) => `await removeLine(${args.join(', ')})`,
		push: (number, block) => `await pushLines(${number}, ${block})`
	}

	const fullCode = makeCode();
	const $ = cheerio.load(fullCode);

	for (const k in rest) {
		const l = [];
		const toRemove = [];

		for (const i of rest[k]) {
			const el = $(`code > .line:not(.line .line):nth-child(${i})`)
			l.push(el.prop('outerHTML'));
			toRemove.push(el);
		}
		toRemove.forEach(x => x.remove())

	rest[k] = l;
	}

	const initCode = [];
	const els = $(`code > .line`);
	els.each((_, el) => {
		el = $(el);
		initCode.push(el.prop('outerHTML'));
		el.remove();
	})
	rest[init] = initCode;

	let i = 0;
	for (const instruction of instructions) {
		steps[i] ||= [];
		undos[i] ||= [];

		const instrs = typeof instruction == "string" ? [instruction] : instruction;

		let shouldDefocus = false;

		for (const instr of instrs) {
			const [command, ...args] = instr.split(' ');
			const cmd = `${command}(${args.join(', ')})`;

			steps[i].push(cmd)

			if (command.startsWith('focus')) undos[i].push('defocus()'), shouldDefocus = true;
			if (command === 'push') {
				const [startLine, block] = args;
				const len = rest[block].length;
				undos[i].push(`remove(${new Array(len).fill().map((_, i) => i + +startLine + 1).join(', ')})`)
			}
		}

		if (
			i !== 0 &&
				shouldDefocus &&
				!steps[i - 1].includes('defocus()')
		) steps[i].unshift('defocus()');

		if (steps[i - 1]) {
			undos[i].push(
				...[...steps[i - 1]]
				.filter(x => !x.startsWith('push'))
			);
		}
		if (steps[i].find(x => x === 'defocus()')) undos[i] = undos[i].filter(x => x !== 'defocus()');

		undos[i] = [...new Set(undos[i])];
		i++
	}

	for (let i = 0; i < steps.length; i++) {
		steps[i] = steps[i].map(step => {
			const [fn, args] = step.split(/\(|\)/);
			console.error({fn, args});
			return command_map[fn](...(args || '').split(',').map(x => x.trim()).filter(Boolean))
		})
		undos[i] = undos[i].map(step => {
			const [fn, args] = step.split(/\(|\)/);
			console.error({fn, args});
			return command_map[fn](...(args || '').split(',').map(x => x.trim()).filter(Boolean))
		})
	}

	const code = `
function htmlToElement(html) {
	const template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

${Object.entries(rest).map(([k, v]) => `const ${k} = ${JSON.stringify(v)}.map(htmlToElement);`).join('\n\n')}

const steps = [
${steps.map((step, i) => `{
forward: async () => {
${step.map(x => `\t\t\t` + x).join('\n')}
},
backward: async () => {
${undos[i].map(x => `\t\t\t` + x).join('\n')}
}
},
`).join('')}
];

const docsCode = ${JSON.stringify(docs)};

`.trim();

	return code;
}
