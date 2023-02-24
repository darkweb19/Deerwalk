//! Array in js from deerwalk

// let color = ["red", "blue", "green"];
// console.log(color);

// let array = [
//   "Sujan",
//   "Bibesh",
//   "Prakanda",
//   "Rahul ",
//   "Srijan",
//   "Red",
//   "Green",
//   "Italy",
//   "Paris",
//   "Canada",
// ];

// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for (let item of array) {
//   console.log(item);
// }

//! symbol number printing
// let names = ["Sujan", "Prakanda", "Rahul", "Gulu", "Pramod"];
// let counter = 1;
// for (let item of names) {
//   console.log(`${counter}. ${item}`);
//   counter++;
// }

//! Programming question of array

// let fruits = ["apple", "mango", "banana", 2, "grapes"];
// for (let item of fruits) {
//   if (item == 2) {
//     break;
//   }
//   console.log(item);
// }

//! String methods in js
/* 
.length 
.slice(start , end)
.substring(start, end )
.substr(start , length)
.concat(newtext)
.toUpperCase 
.toLowerCase 
.trim()
.split()

*/
// let str = "   Hel lo wo rld   ";
// // console.log(str.slice(1, 4));
// // console.log(str.substring(1, 4)); //slice and it is they both are same
// // console.log(str.substr(1, 4));
// // console.log(str.concat("sujan")); //adds new text with back
// // console.log(str.trim()); //removes the white spaces
// console.log(str.split(" "));// it splits with given value

//! task number 3 in including html
function count() {
  let my_text = document.getElementById("my-text").value;
  let result = document.getElementById("result");

  //problem solving part
  let newText = my_text.trim();
  let mainText = newText.split(" ");
  console.log(mainText);

  let countWhite = 0;
  for (let i = 0; i < mainText.length; i++) {
    if (mainText[i] == "") {
      countWhite++;
    }
  }

  result.innerHTML =
    "Total number of word is  :" + (mainText.length - countWhite);
}
