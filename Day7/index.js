// let arrA = [2];
// let arrB = [2];

// if (arrA == arrB) {
// 	console.log("same");
// } else {
// 	console.log("Not same");
// }
// setTimeout(callBack, delay in ms);
//!prints in  given gap
// setTimeout(() => {
// 	console.log("hello");
// }, 3000);

//!set interval is never ending loop
// setInterval(() => {
// 	console.log("helllo");
// }, 3000);

//!example
// function sayHi() {
// 	setTimeout(() => {
// 		console.log("hi");
// 	}, 3000);
// }
// console.log("start");
// sayHi();
// console.log("end");

//!Handling the flow using call back function
// function add(a, b, cb) {
// 	setTimeout(() => {
// 		console.log(a + b);
// 		cb();
// 	}, 3000);
// }
// function end() {
// 	console.log("end");
// }

// console.log("Start");
// add(2, 3, end);

//!task
// function add(a, b, cb) {
// 	setTimeout(() => {
// 		cb(a + b);
// 	}, 3000);
// }

// function mul(a, b, cb) {
// 	setTimeout(() => {
// 		cb(a * b);
// 	}, 3000);
// }

// function sub(a, b, cb) {
// 	setTimeout(() => {
// 		cb(a - b);
// 	}, 3000);
// }
// console.log("start");
// // add(3, 5, (s) => {
// // 	mul(s, 2, (result) => {
// // 		console.log(result);
// // 	});
// // });
// add(3, 5, (s) => {
// 	mul(s, 2, (result) => {
// 		sub(result, 3, (subResult) => {
// 			console.log(subResult);
// 		});
// 	});
// });

//!promise object in js
function add(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout();
	});
}
