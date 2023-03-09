//!how to read and write file
const fs = require("fs");

// const text = fs.readFileSync("test.txt");
// console.log(text.toString());
// // fs.unlinkSync("test1.txt");

// const fs = require("fs");
// const text = fs.readFileSync("text.txt");
// const write = text.toString();
// fs.writeFileSync("test2.txt", write);
// const read2 = fs.readFileSync("test2.txt");
// console.log(read2.toString());
// // fs.unlinkSync("text.txt");

//!using call back arguments
// fs.readFile("test.txt", "utf8", (err, data) => {
// 	if (!err) {
// 		console.log(data);
// 	} else {
// 		console.log(err);
// 	}
// });

// fs.writeFile("text2.txt", "Hello World", (err) => {
// 	if (!err) {
// 		console.log("File created successfully");
// 	} else {
// 		console.log(err);
// 	}
// });

//!Task (asynchronos way to read and write)

// fs.readFile("test.txt", "utf8", (err, data) => {
// 	if (!err) {
// 		fs.writeFile("test2.txt", data, (err) => {
// 			if (!err) {
// 				console.log(data);
// 				fs.unlink("test.txt", (err) => {
// 					if (!err) {
// 						console.log("File is deleted");
// 					} else {
// 						console.log(err);
// 					}
// 				});
// 			} else {
// 				console.log(err);
// 			}
// 		});
// 	} else {
// 		console.log(err);
// 	}
// });

// fs.readFile("test.txt", "utf8", (err, data) => {
// 	if (!err) {
// 		fs.writeFile("testNew.txt", data, (err) => {
// 			if (!err) {
// 				console.log(data);
// 				fs.unlink("test.txt", (err) => {
// 					if (!err) {
// 						console.log("file is Deleted");
// 					} else {
// 						console.log(err);
// 					}
// 				});
// 			} else {
// 				console.log(err);
// 			}
// 		});
// 	} else {
// 		console.log(err);
// 	}
// });

//!task using promise object
function readFileAsync(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

function writeFileAsync(filename, content) {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, content, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve(content);
			}
		});
	});
}

function unlinkAsync(filename) {
	return new Promise((resolve, reject) => {
		fs.unlink(filename, (err) => {
			if (!err) {
				console.log("file deleted " + filename);
				resolve(filename);
			} else {
				reject(err);
			}
		});
	});
}
async function run() {
	const data = await readFileAsync("test2.txt");
	const data2 = await writeFileAsync("test3.txt", data); // test3 file  contains the data of test2 file
	await unlinkAsync("test2.txt"); //test2 file is deleted (unlink)
	console.log(data2);
}
run();
