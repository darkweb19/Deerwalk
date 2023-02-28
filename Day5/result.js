let arr = [];
let mark = document.getElementById("arrayMark");
let result = document.getElementById("result");
let percent = document.getElementById("percentage");
let arrayMark = document.getElementById("arrayMark");
let userInput = document.getElementById("mark");

function add() {
	let user = parseFloat(userInput.value);
	if (isNaN(userInput.value)) {
		userInput.value = "";
		return;
	}
	if (userInput.value != "") {
		arr.push(user);
		console.log(arr);
		arrayMark.innerHTML = "Mark : " + arr;
		userInput.value = "";
	}
}

function calcResult() {
	//for result
	let every = arr.every((value) => {
		return value >= 40;
	});

	if (every == true) {
		result.innerHTML = "Result : PASS";
	} else {
		result.innerHTML = "Result : FAIL";
	}

	//for percentage
	let obtMarks = arr.reduce((acc, value) => {
		return acc + value;
	});
	let totalMarks = 100 * arr.length;

	let percentage = (obtMarks / totalMarks) * 100;

	percent.innerHTML = "Percentage : " + percentage + "%";
}

function reset() {
	userInput.value = "";
	arr = [];
	arrayMark.innerHTML = "Mark : ";
	result.innerHTML = "Result : ";
	percent.innerHTML = "Percentage : ";
}
