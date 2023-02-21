// function add() {
//   let num1 = parseInt(document.getElementById("num1").value);
//   let num2 = parseInt(document.getElementById("num2").value);
//   let result = num1 + num2;
//   document.getElementById("result").innerHTML = "Result =" + result;
// }

// function sub() {
//   let num1 = parseInt(document.getElementById("num1").value);
//   let num2 = parseInt(document.getElementById("num2").value);
//   let sub = num1 - num2;
//   document.getElementById("result").innerHTML = "Result = " + sub;
// }

//function
function check() {
  let age = parseInt(document.getElementById("age").value);
  const ageElement = document.getElementById("age");
  const resultElement = document.getElementById("new-result");
  if (age >= 18) {
    resultElement.innerHTML = " Hey buddy , You can vote";
  } else {
    resultElement.innerHTML = "Hey buddy ,You cannot vote";
  }
  ageElement.value = "";
}

function getFullDay() {
  const dayElement = document.getElementById("day");
  const resultElement = document.getElementById("result");
  switch (dayElement.value.toLowerCase()) {
    case "friday":
    case "sunday":
    case "saturday":
      resultElement.innerHTML = "Weeknd";
      break;

    case "monday":
    case "tuesday":
    case "thursday":
    case "wednesday":
      resultElement.innerHTML = "week day";
      break;

    default:
      resultElement.innerHTML = "Invalid day";
  }
  dayElement.value = "";
}

// 0 - 18 = A
// 18 - 35 = B
// 36 - 60 = C
// 60+ =D

function groupAge() {
  const ageElement = document.getElementById("age");
  const age = parseInt(ageElement.value);
  const resultElement = document.getElementById("result");
  if (age >= 0 && age <= 18) {
    resultElement.innerHTML = "A";
  } else if (age > 18 && age <= 35) {
    resultElement.innerHTML = "B";
  } else if (age > 35 && age <= 60) {
    resultElement.innerHTML = "C";
  } else if (age > 60) {
    resultElement.innerHTML = "D";
  } else {
    resultElement.innerHTML = "Invalid Age";
  }
  ageElement.value = "";
}

function groupCheck() {
  const ageElement = document.getElementById("age");
  const age = parseInt(ageElement.value);
  const resultElement = document.getElementById("result");

  if (age < 18) {
    resultElement.innerHTML = "Child";
  } else if (age >= 60) {
    resultElement.innerHTML = "old";
  } else if (age <= 18) {
    resultElement.innerHTML = "young";
  } else {
    resultElement.innerHTML = "Invalid Age";
  }
  ageElement.value = "";
}

// < 18 = child
// > 18 = young
// age  > 60 = old
