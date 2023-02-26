//!Practise JS questions:

//sum of all numbers present in the array
function sum() {
  let arr = [1, 2, 4, 6, 1, -14];
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp = temp + arr[i];
  }
  console.log(temp);
}

//! a function that filters out the negative number
function filterNegative() {
  let arr = [1, 2, -4, 6, 1, -14, 4, 5, -9];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
    } else {
      newArr[i] = arr[i];
    }
  }
  console.log(newArr);
}

//!removing spaces in string
function removeString() {
  let str = "   Hel  lo World  ";
  str = str.trim();
  //   str = str.replace(/ /g, "");
  str = str.split(" ");
  str = str.join("");
  console.log(str);
}
// removeString();

//!function for adding 1 to num
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
// addUp(600);

//!function thay return number of stick in matchouses
// 1 - 6   2-11   3-16   4-21    87 -
//          12-1   18-2  24-3    522-86
function matchHouses(step) {
  console.log(step * 6 - (step - 1));
}
// matchHouses(87);

//!function that shifts to left
function shiftToLeft(x, y) {
  console.log(x * 2 ** y);
}
// shiftToLeft(46, 6);

//!swap the number
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
//  On the other hand, swapping 43 gives us 34, and 43 > 34.
function largestSwap(num) {
  let last = num % 10;
  let first = Math.trunc(num / 10);
  if (first == last) {
    return true;
  } else if (last > first) {
    return false;
  } else {
    return true;
  }
}
// console.log(largestSwap(53));

// //!Convert Decimal to Binary
// function Binary(decimal) {
//   let bin = "";
//   while (decimal > 1) {
//     bin = (decimal % 2) + bin;
//   }
// }
// Binary(10);
//! couldnt solve this
