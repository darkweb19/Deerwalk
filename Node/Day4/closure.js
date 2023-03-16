function add(a) {
	return function (b) {
		return a + b;
	};
}

let add5 = add(5);
let add10 = add(10);

// console.log(add5(7));
// console.log(add10(17));

//!spread operator is used to cpy the content of an array to another diff array and also work for object
const num1 = [1, 2, 3];
const num2 = [...num1];
num1.push(4);
console.log(num1);
console.log(num2);

//get methods and post methods
