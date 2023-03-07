const sayHi = require("./index"); // this is my module
const http = require("http");
const server = http.createServer((req, res) => {
	// console.log(req.url);
	if (req.url == "/") {
		res.write("Hello world");
	} else if (req.url == "/home") {
		res.write("Welcome to Homepage");
	} else {
		res.write("404 not found");
	}
	res.end();
});
server.listen(3000, () => {
	console.log("Listening on port 3000");
});
