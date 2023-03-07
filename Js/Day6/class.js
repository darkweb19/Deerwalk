class User {
	#name;
	constructor(name, age) {
		this.#name = name;
		this.age = age;
		this.country = "Nepal";
	}
	setName(name) {
		this.#name = name;
	}

	getName() {
		return this.#name;
	}
	get name() {
		return this.#name;
	}
	set name(name) {
		this.#name = name;
	}
}

// const u1 = new User("ram", 2);

// u1.age = 22;
// u1.name = "chup lag radi";
// console.log(u1);

//!task
class Login {
	#email;
	#pins;
	constructor(email, pins) {
		this.#email = email;
		this.#pins = pins - 5;
	}
	get email() {
		return this.#email;
	}
	set email(email) {
		this.#email = email;
	}
	//password checker in js
	set pins(pins) {
		for (let i = 0; i < 3; i++) {
			let oldPin = parseInt(prompt("Enter the old pin"));
			if (oldPin == this.#pins + 5) {
				this.#pins = pins - 5;
			} else {
				alert("incorrect");
			}
		}
	}
	get pins() {
		return this.#pins + 5;
	}
}

// const l1 = new Login("sujan129@gmail.com", 9999);
// console.log(l1.email);
// console.log(l1.pins);

// l1.pins = 2222;
// console.log(l1.pins);
// console.log(l1);

//!Try catch block
try {
	document.getElementById("hello").innerHTML = "Hui";
} catch (i) {
	console.log("There is no hello id stupid");
} finally {
	console.log("this runs every time even if there is nothing to catch");
}

//!another example for try and cathch

// let num1 = parseInt(prompt("enter num1"));
// let num2 = parseInt(prompt("enter num2"));
// try {
// 	if (num2 == 0) {
// 		throw "Division by Zero";
// 	}
// 	let q = num1 / num2;
// 	alert(q);
// } catch (err) {
// 	alert(err);
// }

function parse(str) {
	try {
		console.log(JSON.parse(str));
	} catch (err) {
		console.log("invalid string");
	}
}

parse('{"name" : "SUjan"}');
// parse("{'name' : 'Sujan'}");
