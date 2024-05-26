import {createLogUpdate} from 'log-update';

export default class ProgressBar {
	constructor(size = 100, progress = 0) {
		this.size = size;
		this.progress = progress;
		this.log = createLogUpdate(process.stdout);
	}

	start() {
		this.progress = 0;
		this.render();
	}

	tick(message) {
		this.update(this.progress + 1, message);
	}

	update(progress, message) {
		this.progress = progress;
		this.render(message);
	}

	render(message) {
		const progressPercent = Math.round(this.progress / this.size * 100);

		const progressBarWidth = ~~(process.stdout.columns * 0.5); // Adjust the width of the progress bar as needed
	// 	const completedLength = Math.round(progressPercent / 100 * progressBarWidth);
	// 	const remainingLength = progressBarWidth - completedLength;
	//
	// 	const completedBar = '━'.repeat(completedLength); // Unicode full block character
	// 	const remainingBar = ' '.repeat(remainingLength); // Unicode light shade character
	//
	// 	const coloredBar = `\x1b[32m${completedBar}${remainingBar}\x1b[0m`; // Green and white colors for completed and remaining parts respectively
	//
	// 	this.log(`${coloredBar} ${progressPercent}% (${this.progress}/${this.size}) ${message}`);
		this.log(`\x1b[32m${buildProgressBar(progressPercent, progressBarWidth)}\x1b[0m ${progressPercent}% (${this.progress}/${this.size}) ${message}`)
	}

	end() {
		this.log.clear();
	}
}

function buildProgressBar(percentage, width) {
	const totalChars = 7; // Total number of characters representing the progress bar
	const filledChars = Math.round((percentage / 100) * totalChars); // Number of filled characters

	let progressBar = '█'.repeat(filledChars); // Add filled characters
	const remainingWidth = width - filledChars; // Calculate remaining width
	const remainder = Math.floor((totalChars - filledChars) / totalChars * 7); // Calculate remaining percentage for the last character

	// Add partially filled character if needed
	if (remainder > 0) {
		const partialChar = ['▏', '▎', '▍', '▌', '▋', '▊', '▉'][remainder - 1];
		progressBar += partialChar;
	}

	// Add empty characters
	progressBar += ' '.repeat(remainingWidth);

	return progressBar;
}
