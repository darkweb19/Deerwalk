const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const unlinkAsync = util.promisify(fs.unlink);

// const {
// 	readFileAsync,
// 	writeFileAsync,
// 	unlinkAsync,
// } = require("../ Day2/newText");

const run = async () => {
	const readFile = await readFileAsync("test.txt");
	const writeFile = await writeFileAsync("test5.txt", readFile);
	await unlinkAsync("test5.txt");
	console.log(writeFile.toString());
};
run();
