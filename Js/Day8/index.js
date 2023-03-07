//!Asynchronos function example
function add(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a == 0 || b == 0) {
				reject("Failed to add that shit");
			} else {
				resolve(a + b); // in this case resolve runs but reject is rejected
			}
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

// console.log("start");
// console.log(add(1, 2));
// console.log(sub(6, 2));
//!how to access the value returned by promise object .then() and .catch()

// add(4, 3)
// 	.then((res) => {
// 		console.log(res); // this is still async block
// 	})
// 	.catch((err) => {
// 		console.log(err);
// });

// sub(0, 2)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// //!here if the number is negative catch block is runs and else then block is running under the hood

// console.log("End");

//! another way to access the value returned by promise object alsc called async  await
async function main() {
	console.log("start");
	let result = await add(4, 5);
	console.log(result);
	console.log("Heeyy");
}
// main();

async function main2() {
	try {
		console.log("Start");
		let resultSb = await sub(0, 4);
		console.log(resultSb);
		console.log("End");
	} catch (err) {
		console.log(err);
	}
}

main2();
