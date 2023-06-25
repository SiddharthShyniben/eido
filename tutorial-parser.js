const hjson = require('hjson');
const { readFileSync, writeFileSync } = require('fs');
const { createShikiHighlighter, runTwoSlash, renderCodeToHTML } = require('shiki-twoslash');
const cheerio = require('cheerio');

const content = readFileSync('./tutorial.hjson', 'utf8');

const {instructions, code_raw, ...rest} = hjson.parse(content);

const steps = [];
const undos = [];

const command_map = {
	focus: (...args) => `focusLine(${args.join(', ')})`,
	'focus*': (...args) => `focusToken([${args.join(', ')}])`,
	defocus: () => 'defocus()',
	remove: (...args) => `await removeLine(${args.join(', ')})`,
	push: (number, block) => `await pushLines(${number}, ${block})`
}

const _id = (function* () {
	let i = 0;
	while (true) yield ++i;
})()

const id = () => _id.next().value;
const para = text => `<p id=p${id()}>${text}</p>`

// console.log(code_raw.split('\n').map(l => l.length + '   ' + l).join('\n'))

module.exports = async () => {
	const highlighter = await createShikiHighlighter({ theme: "dark-plus" })

	function makeCode() {
		const twoslash = runTwoSlash(code_raw, "ts", {})
		const html = renderCodeToHTML(twoslash.code, "ts", { twoslash: true }, {}, highlighter, twoslash)

		const $ = cheerio.load(html);
		$('data-lsp').each((_, el) => el.attribs.lsp = highlighter.codeToHtml(el.attribs.lsp, {lang: 'typescript'}))

		return $('.shiki .code-container').html();
	}

	const fullCode = makeCode();
	const $ = cheerio.load(fullCode);

	// $('.line:not(.line .line)').each((i, el) => console.log(i + 1, $(el).text()))

	const toRemove = [];
	for (const k in rest) {
		// console.log(k)
		const l = [];

		for (const i of rest[k]) {
			const el = $(`.line:not(.line .line):eq(${i - 1})`)
			l.push(el.prop('outerHTML'));
			toRemove.push(el);
			// console.log(i, el?.text())
		}

		rest[k] = l;
		// console.log()
	}
	toRemove.forEach(x => x.remove())

	const initCode = [];
	const els = $(`code > .line`);
	els.each((_, el) => {
		el = $(el);
		initCode.push(el.prop('outerHTML'));
		el.remove();
	})
	rest.init = initCode;

	let docs = para(instructions.shift());

	for (const [i, instruction] of instructions.entries()) {
		steps[i] ||= [];
		undos[i] ||= [];

		const instrs = typeof instruction == "string" ? [instruction] : instruction;
		docs += para(instrs.shift());

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
			i !== 0 && shouldDefocus &&
			!steps[i - 1].includes('defocus()')
		) steps[i].unshift('defocus()');

		if (steps[i - 1]) undos[i].push(...[...steps[i - 1]].filter(x => !x.startsWith('push')));

		if (steps[i].find(x => x === 'defocus()')) undos[i] = undos[i].filter(x => x !== 'defocus()');

		undos[i] = [...new Set(undos[i])];
	}

	for (let i = 0; i < steps.length; i++) {
		steps[i] = steps[i].map(step => {
			const [fn, args] = step.split(/\(|\)/);
			return command_map[fn](...(args || '').split(',').map(x => x.trim()).filter(Boolean))
		})
		undos[i] = undos[i].map(step => {
			const [fn, args] = step.split(/\(|\)/);
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
			${step.join('\n')}
		},
		backward: async () => {
			${undos[i].join('\n')}
		}
	},`).join('\n')}
];

const docsCode = ${JSON.stringify(`<div id="docs">${docs}</div>`)};

`.trim();

	writeFileSync('./public/vars.js', code);

	return code;
}
