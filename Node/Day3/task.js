const url = require("url");

// const myUrl = "https://user:pwd@abc.com:3344/home?a=23#about";
// const parsedUrl = url.parse(myUrl);
// console.log(parsedUrl);

//!task
const http = require("http");

const server = http.createServer((req, res) => {
	const myUrl = url.parse(req.url, true);
	if (Object.keys(myUrl.query).length == 0) {
		res.write(`<h1>Welcome  </h1>`);
	} else if (myUrl.query.type == "old") {
		res.write(`<h1>HYYY ${myUrl.query.name} </h1>`);
	} else {
		res.write(`<h1>WElcome ${myUrl.query.name} </h1>`);
	}
	console.log(myUrl);

	res.end();
});

server.listen(4000, () => {
	console.log("Listening on port");
});
