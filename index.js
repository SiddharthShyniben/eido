import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

import genCode from './tutorial-parser.js';
import {createUser, userExists, getUser, storeRefreshToken, refreshTokenExists, invalidateRefreshToken} from './db.js';

import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import Aaauth from 'aaauth';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

const aaauth = Aaauth({
	jwtSecret: process.env.JWT_SECRET,
	createUser, userExists, getUser, storeRefreshToken, refreshTokenExists, invalidateRefreshToken
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))
app.use(aaauth.router);

app.get('/', (_req, res) => {
	res.send('<a href="/minimax">Minimax</a>');
});

let generatedCode;

app.get('/:tutorial', aaauth.authenticate, async (req, res) => {
	const filePath = join(__dirname, 'tutorials', `${req.params.tutorial}.hjson`)

	if (!existsSync(filePath)) {
		return res.redirect('/')
	}

	const code = await genCode(filePath);
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

		<script>${code}</script>
		<script src="main.js"></script>
	</body>
	</html>`.trim();
	
	res.send(generatedCode);
});

app.listen(PORT, () => {
	console.log('Started');
})
