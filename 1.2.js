// - 1.2 Promises , write the orders which logs show us

// NOTE: I am note sure what is the point of question exactly, but if we are taling about response priority after executing a promise, the answer is someyhing like below:

new Promise((resolve, reject) => {
	console.log("Promise 1"); // log 1
	resolve(); 
})
	.then(() => {
		console.log("Promise 2"); // log 2
		return Promise.resolve();
	})
	.then(() => {
		console.log("Promise 3"); // log 3 + manual error throw
		throw new Error("Something went wrong");
	})
	.catch((error) => {
		console.log("Promise 4 - Error:", error.message); // log 4 + err message
		return Promise.reject(error);
	})
	.finally(() => {
		console.log("Promise 5 - Finally"); // // log 5, executes anyway at the end
	});
