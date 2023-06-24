const express = require('express');
const morgan = require('morgan');
const {join} = require('path');
const genCode = require('./tutorial-parser.js');
const app = express();
const PORT = 3000;

let generatedCode;

// TODO: // ^? support?
(async () => {
	generatedCode = `
	<!DOCTYPE html>
	<html>
	<head>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div id="main">
			<div class="code-container"><code></code></div>
		</div>
		<script>${await genCode()}</script>
		<script src="main.js"></script>
	</body>
	</html>
	`.trim();
})()

app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))

app.get('/', async (_req, res) => {
	// const highlighter = await createShikiHighlighter({ theme: "dark-plus" })
	// const twoslash = runTwoSlash(code, "ts", {})
	// const html = renderCodeToHTML(twoslash.code, "ts", { twoslash: true }, {}, highlighter, twoslash)
	//
	// const $ = cheerio.load(html)
	//
	// $('data-lsp').each((_, el) => {
	// 	const content = el.attribs.lsp;
	// 	el.attribs.lsp = highlighter.codeToHtml(content, {lang: 'typescript'});
	// })

// 	res.send(`
// <!DOCTYPE html>
// <html>
// <head>
// 	<link rel="stylesheet" href="style.css">
// </head>
// <body>
// 	<div id="main">
// 		${$('.shiki .code-container').html()}
// 		${docs}
// 	</div>
// 	<script type="module" src="main.js"></script>
// </body>
// </html>
// `.trim());
	
	res.send(generatedCode);
});

app.listen(PORT, () => {
	console.log('Started');
})
