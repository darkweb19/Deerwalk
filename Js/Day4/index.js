//!Day4 Deerwalk js : Data Structures and Algorithm  Stack

let result = document.getElementById("result");
let arrInitial = [];

function reRender() {
	result.innerHTML = "Item : " + arrInitial;
	document.getElementById("user").value = "";
}

function push() {
	let userInput = document.getElementById("user").value;
	if (userInput != "") {
		arrInitial.push(userInput);
	}
	reRender();
}

function pop() {
	arrInitial.pop();
	reRender();
}

function unshift() {
	let userInput = document.getElementById("user").value;
	arrInitial.unshift(userInput);
	reRender();
}
function shift() {
	arrInitial.shift();
	reRender();
}

reRender();

//! returns new aray splice(startIndex , totalNUmber, numberToAdd)

//! functions and  parameters
function add(num1, num2) {
	return num1 + num2;
}

// console.log(add(23, 12));

function sub(num1, num2) {
	return num1 - num2;
}

// console.log(sub(2, 12));

// let ans = sub(add(12, 3), 5);
// console.log(ans);

//! function is a first class citizen
// we can assign function as a variable
let a = (a) => console.log("Hi" + (a + b));
//!this is an arrow function

// a(4, 5);
b;
// welcome("Sujan");

//!Call back function example  is add and Higher order function is Calculate
let adds = (num1, num2) => num1 + num2;
let subs = (num1, num2) => num1 - num2;
function calculate(num1, num2, operation) {
	return operation(num1, num2);
}
// console.log(calculate(3, 4, adds));

function run(num1, num2, sym) {
	let fn;
	if (sym == "+") {
		fn = adds;
	} else {
		fn = subs;
	}
	console.log(calculate(num1, num2, fn));
}
run(10, 20, "+");
run(10, 20, "-");
