//!Playing around with array in js using HTML

let userInput = document.getElementById("user");
let result = document.getElementById("result");
let errorMsg = document.getElementById("error");
let arr = ["Sujan", "Subani", "nothing"];

function reRender() {
	result.innerHTML = "Item : " + arr;
	userInput.value = "";
}
function push() {
	let userValue = userInput.value;
	if (userValue != "") {
		arr.push(userValue); //user must enter stg
	}
	reRender();
}

function pop() {
	if (arr.length == 0) {
		errorMsg.innerHTML = "Array is empty ";
	}
	arr.pop();
	reRender();
}

function shift() {
	if (arr.length == 0) {
		errorMsg.innerHTML = "Array is empty ";
	}
	arr.shift();
	reRender();
}

function unshift() {
	let userValue = userInput.value;
	arr.unshift(userValue);
	reRender();
}

reRender();
