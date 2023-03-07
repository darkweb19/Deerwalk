//!Asynchronos function example
function add(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b); // in this case resolve runs but reject is rejected
			reject("Failed to add that shit");
		}, 3000);
	});
}

function sub(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a - b > 0) {
				resolve(a - b);
			} else {
				reject("Invalid Number");
			}
		}, 3000);
	});
}
console.log("start");
// console.log(add(1, 2));
// console.log(sub(6, 2));
//!how to access the value

// add(4, 3)
// 	.then((res) => {
// 		console.log(res); // this is still async block
// 	})
// 	.catch((err) => {
// 		console.log(err);
// });

sub(0, 2)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
//!here if the number is negative catch block is runs and else then block is running under the hood

console.log("End");
