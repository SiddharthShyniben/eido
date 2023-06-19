const cheerio = require('cheerio');
const express = require('express');
const morgan = require('morgan');
const {join} = require('path');
const { runTwoSlash, createShikiHighlighter, renderCodeToHTML } = require('shiki-twoslash');
const app = express();
const PORT = 3000;

const docs = `
<div id="docs">
	<p id="p1">Today, we implement a lil minimax function</p>
	<p id="p2">First, we need to check if the game is over or is out of bounds</p>
	<p id="p3">If then, we return the state of the board. This will help in recursion.</p>
	<p id="p4">From here, we have to do different things depending on whether we are choosing the best move (for the maximizingPlayer) or the worst (best for the opponent)</p>
	<p id="p5">As you can see, the maximizingPlayer argument is passed into the function. This is flipped whenever the function calls itself recursively so that we alternate correctly between moves good for us and moves good for the opponent</p>
	<p id="p6">If we are maximizing, we recursively find the best possible move and then return the heuristic for that...</p>
	<p id="p7">...and vice versa</p>
</div>
`

const code = `
// @errors: 2300
type Node = {board: Array<number>};
type Heuristic = number;
type IdealMove = {value: Heuristic, state: Node | null}

function heuristic(): Heuristic {
	return 0;
}

function moves(node: Node): Array<Node> {
	return []
}

function gameOver(node: Node): boolean {
	return Math.random() > 0.5 ? true : false;
}

// ---cut---
function minimax(node: Node, depth: number, maximizingPlayer: boolean): IdealMove {
	if (depth === 0 || gameOver(node)) {
		return {value: heuristic(), state: node};
	}

	if (maximizingPlayer) {
		let value = -Infinity;
		let state = null;
		for (const child of moves(node)) {
			const {value: newValue, state: newState} = minimax(child, depth - 1, false);
			state = value > newValue ? state : newState
			value = Math.max(value, newValue)
		}
		return {value, state};
	} else {
		let value = -Infinity;
		let state = null;
		for (const child of moves(node)) {
			const {value: newValue, state: newState} = minimax(child, depth - 1, false);
			state = value > newValue ? state : newState
			value = Math.max(value, newValue)
		}
		return {value, state};
	}
}
`.trim();

// TODO: // ^? support?

app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))

app.get('/', async (_req, res) => {
	const highlighter = await createShikiHighlighter({ theme: "dark-plus" })
	const twoslash = runTwoSlash(code, "ts", {})
	const html = renderCodeToHTML(twoslash.code, "ts", { twoslash: true }, {}, highlighter, twoslash)

	const $ = cheerio.load(html)

	$('data-lsp').each((_, el) => {
		const content = el.attribs.lsp;
		el.attribs.lsp = highlighter.codeToHtml(content, {lang: 'typescript'});
	})

	res.send(`
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	${$('.shiki .code-container').html()}
	${docs}
	<script type="module" src="main.js"></script>
</body>
</html>
`.trim());
});

app.listen(PORT, () => {
	console.log('Started');
})
