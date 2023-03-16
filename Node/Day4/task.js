const http = require("http");
const url = require("url");
let user = ["ean", "sujan"];

const server = http.createServer((req, res) => {
	const parsedReqUrl = url.parse(req.url, true);
	if (parsedReqUrl.pathname == "/") {
		res.write(`<h1>Hello Guys</h1>`);
	}
	if (parsedReqUrl.pathname == "/reset") {
		user = [];
		res.setHeader("Content-Type", "text/html");
		res.write(`<h2>UserLists  :</h2>
        <ul>
        ${user.map((u) => `<li>${u}</li>`).join("")}
        </ul>
        `);
	}

	if (req.method == "GET" && parsedReqUrl.pathname == "/user") {
		res.setHeader("Content-Type", "text/html");
		res.write(`<h2>UserLists  :</h2>
        <ul>
        ${user.map((u) => `<li>${u}</li>`).join("")}
        </ul>
        `);
	}

	if (req.method == "GET" && parsedReqUrl.pathname == "/add-user") {
		const addUser = parsedReqUrl.query.name;
		user.push(addUser);
		res.write(`<h1>user added</h1>`);
	}
	res.end();
});

server.listen(4000, () => {
	console.log("Listen on port :  4000");
});
