const $ = (...args) => document.querySelector(...args);
const $$ = (...args) => document.querySelectorAll(...args);
const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

main.innerHTML += docsCode;
const code = $('code');
console.log(code);

for (let line of init) {
	code.appendChild(line);
}


let lines = [...$$('.line:not(.line .line)')];
const docs = $("#docs");
const docEntries = $$("#docs p");

class AsyncQueue {
	constructor() {
		this.functions = [];
		this.executing = false;
	}

	enqueue(fn, execute = true) {
		console.log('QUEUED')
		this.functions.push(fn);
		if (!this.executing && execute) this.execute();
	}

	async execute() {
		this.executing = true;
		if (!this.functions.length) return;

		while (this.functions.length) {
			const fn = this.functions.shift();
			console.log('CALL');
			await fn();
		}

		this.executing = false;
	}

	makeFunction(fn) {
		console.log(fn);
		return (...args) => this.enqueue(() => fn(...args));
	}
}

const queue = new AsyncQueue();

let i = 0;
const next = $('#next');
const previous = $('#previous');

const nextFn = async () => {
	if (i < steps.length) {
		await steps[i++].forward();
	}
};

const prevFn = async () => {
	if (i > 0) {
		await steps[--i].backward();
	}
}

const focusLine = queue.makeFunction(_focusLine)
const focusToken = queue.makeFunction(_focusToken)
const removeLine = queue.makeFunction(_removeLine);
const saveLine = queue.makeFunction(_saveLine);
const pushLine = queue.makeFunction(_pushLine);
const pushLines = queue.makeFunction(_pushLines);
const defocus = queue.makeFunction(_defocus);

function _focusLine(...lineNrs) {
	lines.forEach((line, i) => {
		if (lineNrs.includes(i + 1)) {
			line.classList.add('focus');
			line.classList.remove('dim');
		} else {
			line.classList.add('dim')
			line.classList.remove('focus');
		}
	})
}

function _focusToken(...locs) {
	locs.forEach(loc => {
		const [lineNr, ...tokenNrs] = loc;
		lines[lineNr - 1].childNodes.forEach((node, i) => {
			if (tokenNrs.includes(i + 1)) {
				node.classList.add('focus');
				node.classList.remove('dim');
			} else {
				node.classList.add('dim')
				node.classList.remove('focus');
			}
		});
	});
}

function _removeLine(...lineNrs) {
	return new Promise(resolve => {
		const animations = [];

		for (const l of lineNrs) {
			const line = lines[l - 1];
			line.classList.add('remove');
			animations.push(
				new Promise((resolve) => {
					lines.slice(l).forEach(async (line) => {
						line.classList.add('remove-next');
						await sleep(500);
						line.classList.remove('remove-next');
					});
					resolve();
				})
			);
		}

		Promise.all(animations)
			.then(() => {
				const removalPromises = lineNrs.map((l) => {
					const line = lines[l - 1];
					return new Promise((resolve) => {
						sleep(500).then(() => {
							line.classList.remove('remove');
							line.remove();
							lines = [...$$('.line:not(.line .line)')];
							resolve();
						});
					});
				});
				Promise.all(removalPromises).then(() => {
					resolve();
				});
		});
	});
}

function _saveLine(l) {
	const line = lines[l - 1];
	line.remove();
	lines = [...$$('.line:not(.line .line)')];
	return line;
}

function _pushLine(after, line) {
	line.classList.add('insert');

	const l = lines[after - 1];
	if (l) {
		l.parentNode.insertBefore(line, l.nextSibling); // ugh
	} else {
		code.appendChild(line);
	}

	$$('data-lsp').forEach(el => {
		if (!el.getAttribute('lsp')) return;
		const node = document.createRange().createContextualFragment(el.getAttribute('lsp'))
		el.appendChild(node.querySelector('code'));
		el.removeAttribute('lsp');
	})

	lines = [...$$('.line:not(.line .line)')];
	return new Promise(resolve => setTimeout(() => resolve(line.classList.remove('insert')), 500))
}

async function _pushLines(after, lines) {
	const ps = [];
	for (let i = 0; i < lines.length; i++) {
		ps.push(_pushLine(after + i, lines[i]));
	}

	await Promise.all(ps);
	lines[0].scrollIntoView();
}

function saveLines(...lineNrs) {
	const ls = [];
	for (const l of lineNrs) {
		const line = lines[l - 1];
		line.remove();
		ls.push(line);
	}
	lines = [...$$('.line:not(.line .line)')];
	return ls;
}

function _defocus() {
	$$('.dim, .focus').forEach(el => {
		el.classList.remove('dim', 'focus')
	})
}

const observerOptions = {
	root: docs,
	threshold: 0.1,
};

const observer = new IntersectionObserver(callback, observerOptions);

let lastIntersecting = 1;
function callback(entries) {
	entries.forEach(entry => {
		const { target, isIntersecting } = entry;
		const id = +target.id.slice(1);

		if (!isIntersecting) return;

		if (id > lastIntersecting) nextFn();
		else if (id < lastIntersecting) prevFn();

		lastIntersecting = id;
	});
}

docEntries.forEach(p => observer.observe(p));
