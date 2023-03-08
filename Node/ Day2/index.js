//!this file is wrapped in a function having 5 parameter,
// function sayHi(name) {
// 	console.log("Hey " + name);
// }
// function sayBye() {
// 	console.log("Bye");
// }
//!task
// function add(a, b) {
// 	console.log("Sum is : " + (a + b));
// }
// function sub(a, b) {
// 	console.log("Sub is : " + (a - b));
// }
// function mul(a, b) {
// 	console.log("Mul is : " + a * b);
// }
// function div(a, b) {
// 	console.log("Div is :" + a / b);
// }
// module.exports = { add, sub, mul, div };

// exports.sayHi = sayHi; //!this both does the same job
//!this is another and simple way
exports.add = (a, b) => {
	console.log("sum: " + (a + b));
};
exports.sub = (a, b) => {
	console.log("Sub is : " + (a - b));
};
exports.mul = (a, b) => {
	console.log("Sub is : " + a * b);
};
exports.div = (a, b) => {
	console.log("Sub is : " + a / b);
};
