// - 1.4 Manipulate the object to always return "404" with Proxy

const myObject = {
	name: "hooman",
	pass: 30,
};

const handler = {
	get: function () {
		return "404";
	},
};

const proxy = new Proxy(myObject, handler);

console.log(proxy.name); //  "404"
console.log(proxy.pass); // "404"
