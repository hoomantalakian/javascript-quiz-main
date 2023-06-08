// - 1.1 Write a function which takes array of numbers and a function which will be called on each item and return the newly created array,in two ways : Declaritive and Imperative
// ------------------------------

// Declarative Function
const declarativeFunction = (array, callback) =>
	array.map((item) => callback(item));

// Imperative Function
const imperativeFunction = function (array, callback) {
	const newArraye = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(newArraye[i]));
	}
	return result;
};
