//! Looop in js Day2 Deerwalk
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//! for odd and even
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is Even`);
//   } else {
//     console.log(`${i} is Odd`);
//   }
// }

// let num = 1;

//While loop
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// var num = 1;

// do {
//   console.log(num);
//   num++;
// } while (num <= 10)

// for leap year

// for (let year = 2000; year <= 2033; year = year + 4) {
//   console.log(year);
// }

// let year = 2000;
// do {
//   if (year % 4 == 0) {
//     console.log(`${year} is leap year`);
//   }
//   year++;
// } while (year <= 2033);

// using for loop
// let sum = 1;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// using while loop
// let sum = 1;
// let i = 1;
// while (i <= 10) {
//   sum = sum + i;
//   console.log(sum);
// }

//! modern calculator

function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result = result + i;
  }
  document.getElementById("result").innerHTML = "The sum is :" + result;
}
