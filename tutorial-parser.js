const hjson = require('hjson');
const { readFileSync } = require('fs');
const { createShikiHighlighter, runTwoSlash, renderCodeToHTML } = require('shiki-twoslash');
const cheerio = require('cheerio');

const content = readFileSync('./tutorial.hjson', 'utf8');

const {instructions, codeRaw, ...rest} = hjson.parse(content);

const steps = [];
const undos = [];

(async () => {
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
		'focus*': (...args) => `focusLine(${args[0]}); focusToken(${args.join(', ')})`,
		defocus: () => 'defocus()',
		remove: (...args) => `await removeLine(${args.join(', ')})`,
		push: (number, block) => `await push(${number}, ${block})`
	}

	const fullCode = makeCode();
	const $ = cheerio.load(fullCode);

	for (const k in rest) {
		const l = [];
		const toRemove = [];

		console.log(k);
		for (const i of rest[k]) {
			const el = $(`code > .line:not(.line .line):nth-child(${i})`)
			l.push(el.prop('outerHTML'));
			console.log(el.text())
			toRemove.push(el);
		}
		toRemove.forEach(x => x.remove())
		console.log()

		rest[k] = l;
	}

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
			return command_map[fn](...(args || '').split(',').map(x => x.trim()).filter(Boolean))
		})
	}

	const code = `
function fragmentFromString(strHTML) {
	return document.createRange().createContextualFragment(strHTML);
}

${Object.entries(rest).map(([k, v]) => `const ${k} = ${JSON.stringify(v)}`).join('\n\n')}.map(fragmentFromString);

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
]`.trim();

	console.log(code)
})();
