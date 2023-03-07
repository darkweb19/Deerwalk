//!Playing around with array in js using HTML

let userInput = document.getElementById("user");
let result = document.getElementById("result");
let errorMsg = document.getElementById("error");
let arr = ["Sujan", "Subani", "nothing"];

function reRender() {
	result.innerHTML = "Item : " + arr;
	userInput.value = "";
}

//function for pushing element in array
function push() {
	let userValue = userInput.value;
	if (userValue != "") {
		arr.push(userValue); //user must enter stg
	}
	reRender();
}
//function for popping from the array
function pop() {
	if (arr.length == 0) {
		errorMsg.innerHTML = "Array is empty ";
	}
	arr.pop();
	reRender();
}
// fuction for shifting from the array
function shift() {
	if (arr.length == 0) {
		errorMsg.innerHTML = "Array is empty ";
	}
	arr.shift();
	reRender();
}
//function for unshifting from the array
function unshift() {
	let userValue = userInput.value;
	arr.unshift(userValue);
	reRender();
}

reRender();
