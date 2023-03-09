const url = require("url");

// const myUrl = "https://user:pwd@abc.com:3344/home?a=23#about";
// const parsedUrl = url.parse(myUrl);
// console.log(parsedUrl);

//!task
const http = require("http");

const server = http.createServer((req, res) => {
	const myUrl = url.parse(req.url, true);
	// res.write(`<h1>Welcome ${myUrl.query.name} </h1>`);
	if (myUrl.query.type == "old") {
		res.write(`<h1>HYYY ${myUrl.query.name} </h1>`);
	} else {
		res.write(`<h1>WElcome ${myUrl.query.name} </h1>`);
	}
	// console.log(myUrl);
	res.end();
});

server.listen(3000, () => {
	console.log("Listening on port");
});
