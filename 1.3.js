// - 1.3 how to transfer this "[4,[[5],[6,[7],8],9,10]]" to [4,5,6,7,8,9,10]

function numberExtract(str) {
	const regex = /[0-9]+/g;
	const numbers = str.match(regex);
	return numbers.map(Number);
}
