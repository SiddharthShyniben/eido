const $ = (...args) => document.querySelector(...args);
const $$ = (...args) => document.querySelectorAll(...args);
const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const code = $('.code-container');
let lines = [...$$(':not(data-lsp) > code > .line')];
console.log(lines);
const docs = $("#docs");
const docEntries = $$("#docs p");
// let logLines = [...$$('.logger')]

// UGH
$$('data-lsp').forEach(el => {
	const node = document.createRange().createContextualFragment(el.getAttribute('lsp'))
	el.appendChild(node.querySelector('code'));
	el.removeAttribute('lsp');
})

const firstBlock = saveLines(2, 3, 4, 5);
const ifBlock = saveLines(2, 11, 20);
const maximizingBlock = saveLines(2, 3, 4, 5, 6, 7, 8, 9)
const minimizingBlock = saveLines(2, 3, 4, 5, 6, 7, 8, 9)

const steps = [
	{
		forward: async () => {
			await pushLines(1, firstBlock);
			focus(2);
			focusToken([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
		},
		backward: async () => {
			clearFocus();
			await removeLine(2, 3, 4, 5);
		}
	},
	{
		forward: () => {
			clearFocus();
			focus(3);
		},
		backward: () => {
			clearFocus();
			focus(2);
			focusToken([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
		}
	},
	{
		forward: async () => {
			clearFocus();
			await pushLines(5, ifBlock);
		},
		backward: async () => {
			await removeLine(6, 7, 8);
			focus(3);
		}
	},
	{
		forward: () => {
			focus(1, 6);
			focusToken([1, 13, 14, 15], [6, 4])
		},
		backward: () => {
			clearFocus();
		}
	},
	{
		forward: async () => {
			clearFocus();
			await pushLines(6, maximizingBlock)
		},
		backward: async () => {
			await removeLine(7, 8, 9, 10, 11, 12, 13, 14)
			focus(1, 6);
			focusToken([1, 13, 14, 15], [6, 4])
		}
	},
	{
		forward: async () => {
			await pushLines(15, minimizingBlock)
		},
		backward: async () => {
			await removeLine(16, 17, 18, 19, 20, 21, 22, 23)
		}
	}
];

let i = 0;
const next = $('#next');
const previous = $('#previous');

const nextFn = async () => {
	if (i < steps.length) {
		disableButtons();
		await steps[i].forward();
		i++;
		enableButtons();
	}
};

const prevFn = async () => {
	if (i > 0) {
		disableButtons();
		i--;
		await steps[i].backward();
		enableButtons();
	}
}

// next.addEventListener('click', nextFn)
// previous.addEventListener('click', prevFn)

function disableButtons() {
	// previous.disabled = next.disabled = true;
}

function enableButtons() {
	// previous.disabled = next.disabled = false;
}

function focus(...lineNrs) {
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

function focusToken(...locs) {
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

function removeLine(...lineNrs) {
	return new Promise((resolve) => {
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
							lines = [...$$(':not(data-lsp) > code > .line')];
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

function saveLine(l) {
	const line = lines[l - 1];
	line.remove();
	lines = [...$$(':not(data-lsp) > code > .line')];
	return line;
}

async function pushLine(after, line) {
	const l = lines[after - 1];
	line.classList.add('insert');
	l.parentNode.insertBefore(line, l.nextSibling); // ugh
	setTimeout(() => line.classList.remove('insert'), 500)
	lines = [...$$(':not(data-lsp) > code > .line')];
}

async function pushLines(after, lines) {
	for (let i = 0; i < lines.length; i++) {
		await pushLine(after + i, lines[i]);
	}
}

function saveLines(...lineNrs) {
	const ls = [];
	for (const l of lineNrs) {
		const line = lines[l - 1];
		console.log(l, line);
		line.remove();
		ls.push(line);
	}
	lines = [...$$(':not(data-lsp) > code > .line')];
	return ls;
}

function clearFocus() {
	$$('.dim, .focus').forEach(el => {
		el.classList.remove('dim', 'focus')
	})
}

const observerOptions = {
  root: docs,
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, observerOptions);

let lastIntersecting = 1;
function callback(entries) {
	entries.forEach(entry => {
		const { target, isIntersecting } = entry;
		const id = +target.id.slice(1);

		if (!isIntersecting) return;
		console.log(id, isIntersecting);

		if (id > lastIntersecting) {
			nextFn();
		} else if (id < lastIntersecting) {
			prevFn();
		}
		lastIntersecting = id;
	});
}

docEntries.forEach(p => observer.observe(p));
