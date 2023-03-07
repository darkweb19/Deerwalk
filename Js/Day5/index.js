//!understanding more about call back and higher order

// let result = document.getElementById("result");
// let Hi = (user) => `HI ${user}`;
// let Bye = (user) => `BYE ${user}`;

// function greet(action) {
// 	let userName = document.getElementById("user").value;
// 	let hi = Hi(userName);
// 	let bye = Bye(userName);

// 	if (action == "hi") {
// 		result.innerHTML = hi;
// 	} else {
// 		result.innerHTML = bye;
// 	}
// }

let result = document.getElementById("result");
function sayHi(userName) {
	return `HI ${userName}`;
}

function sayBye(userName) {
	return `BYE ${userName}`;
}
//display is higher order function
function display(userName, getMsg) {
	if (userName != "") {
		result.innerHTML = getMsg(userName);
	}
	// alert(getMsg(userName));
}
//!getmsg function is apaprently will be equals to sayhi and saybye function
//!getmsg is call back function
function greet(action) {
	var userInput = document.getElementById("user").value;

	if (action == "hi") {
		display(userInput, sayHi);
	} else {
		display(userInput, sayBye);
	}
}

//!More about array methods
//!forEach function doesnt create a new array
let num = [1, 2, 3, 4, 5];
num.forEach((value, index, array) => {
	// console.log(value, index, array);
});
//!map function return the new array of same length
let sq = num.map((value) => {
	return value * value;
});
// console.log(sq);

//!filter function returns the new array but may be of different length
let even = num.filter((value, index, array) => {
	return value * value;
});
// console.log(even);

//! reduce function
let sum = num.reduce((acc, value, index, array) => {
	return acc + value;
});
console.log(sum);

//!every function
let every = num.every((value, index, array) => {
	return value >= 1;
});
console.log(every);

let some = num.some((value, index, array) => {
	return value > 1;
});
console.log(some);
