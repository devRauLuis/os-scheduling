export function getRndNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRndQuantum() {
	return getRndNumber(3000, 8000);
}

export function getRndPriority() {
	return getRndNumber(1, 10);
}

const operations = [
	'Launch',
	'Close',
	'Operation',
	'Send',
	'Listen',
	'Delete',
	'Create',
	'Get',
	'Post',
	'Update',
];

const getRndProcesses = () => {
	let arr = [];
	for (let index = 0; index < 100; index++) {
		arr.push(
			operations[getRndNumber(0, operations.length - 1)] +
				' ' +
				getRndNumber(1000, 6000)
		);
	}
	return arr;
};

export const processNames = getRndProcesses();

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
