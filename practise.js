//!Practise JS questions: https://edabit.com/challenges

//!sum of all numbers present in the array
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
	return sum;
}
// addUp(600);

//!function thay return number of stick in matchouses
/*
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
*/

// 1 - 6   2-11   3-16   4-21    87 -
//          12-1   18-2  24-3    522-86
function matchHouses(step) {
	if (step == 0) {
		return 0;
	}
	return step * 6 - (step - 1);
}
// matchHouses(87);

//!function that shifts to left
function shiftToLeft(x, y) {
	return x * 2 ** y;
}
// shiftToLeft(46, 6);

//!Power Calculator
/*
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
*/
function circuitPower(voltage, current) {
	return voltage * current;
}
// console.log(circuitPower(23, 2));

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

/* 
!Chck if an array can be nested or not:
example :
Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
*/
function canNest(arr1, arr2) {
	let arr1Min = Math.min(...arr1);
	let arr2Min = Math.min(...arr2);
	let arr1Max = Math.max(...arr1);
	let arr2Max = Math.max(...arr2);

	if (arr1Min > arr2Min && arr1Max < arr2Max) {
		return true;
	} else {
		return false;
	}
}
// console.log(canNest([3, 1], [4, 0])); //!return true
// console.log(canNest([1, 2, 3, 4], [2, 3])); //!return false

//!Number of Squares in an N * N Grid
/*
Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
Examples:
numberSquares(2) ➞ 5
numberSquares(4) ➞ 30
numberSquares(5) ➞ 55

Explanation:
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
*/

function numberSquare(n) {
	if (n == 0) {
		return 0;
	}
	return n ** 2 + numberSquare(n - 1);
}
// console.log(numberSquare(7));

//!Sum of Resistance in Series Circuits
/*Explanation: 
When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...
Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

Examples
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
*/
function seriesResistance(arr) {
	let RT = 0;
	for (let i = 0; i < arr.length; i++) {
		RT = RT + arr[i];
	}
	function str() {
		if (RT <= 1) {
			return " ohm";
		} else {
			return " ohms";
		}
	}
	return RT + str();
}
// console.log(seriesResistance([16, 3.5, 6]));
// seriesResistance([16, 3.5, 6]); //25.5 ohms

//!What's Hiding Amongst the Crowd?
/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

Examples:
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/
function detectWords(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str[i].toLowerCase()) {
			newStr = newStr + str[i];
		}
	}
	console.log(newStr);
}
// detectWords("UcUNFYGaFYFYGtNUH");
// console.log(detectWords("KJHKca"));

//!Tuck in array
/*
Create a function that takes two arrays and insert the second array in the middle of the first array.
Example :
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
*/
function tuckIn(arr1, arr2) {
	let newArr = [];
	let newLength = arr1.length + arr2.length;
	newArr[0] = arr1[0];
	newArr[newLength - 1] = arr1[arr1.length - 1];
	for (let i = 1; i < newLength - 1; i++) {
		newArr[i] = arr2[i - 1];
	}
	console.log(newArr);
}

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);      output=> //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//!No Conditionals
/*
No Conditionals?
Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Examples
flip(1) ➞ 0

flip(0) ➞ 1....

Notes:
		Try completing this challenge without using any:
			.Conditionals
			.Ternary operators
			.Negations
			.Bit operators
*/
function potatoes(y) {
	let x = 1;
	let z = x - y;
	return z;
}
// console.log(potatoes(0));
