let arr = [];
let mark = document.getElementById("arrayMark");
let result = document.getElementById("result");
let percent = document.getElementById("percentage");
let arrayMark = document.getElementById("arrayMark");
let userInput = document.getElementById("mark");
let popup = document.getElementById("popup");

function add() {
	let user = parseFloat(userInput.value);
	if (isNaN(userInput.value) || userInput.value > 100) {
		if (isNaN(userInput.value)) {
			popup.innerHTML = "Error: Should be a number";
		}
		if (userInput.value > 100) {
			popup.innerHTML = "Error: Must be less than 100";
		}
		userInput.value = "";
		return;
	}
	if (userInput.value != "") {
		arr.push(user);
		arrayMark.innerHTML = "Mark : " + arr;
		userInput.value = "";
		popup.innerHTML = "Error: ";
	} else {
		popup.innerHTML = "Error: Cannot be empty";
	}
}

function calcResult() {
	if (arr.length == 0) {
		reset();
		return;
	}

	console.log(arr.length);
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
	popup.innerHTML = "Error:";
	percent.innerHTML = "Percentage : ";
}
