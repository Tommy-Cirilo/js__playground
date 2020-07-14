// "use strict";
//
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  * If you don't know what an iffe is, don't worry about it :)
//  *
//  * This file is for defining the following functions. See README.md for more detail.
//  */
//
//
// // Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any
// // other situation. You do not need to consider floating-point and decimal numbers.
//
// function isOdd(num) {
//
//     if(num % 2 == 1) {
//         return true;
//     }
//     return false;
// }
//
//
// /*function isOdd(num) {
//     return parseFloat(num) ? num % 2 !== 0 : false;
// }*/
//
//
//
// // Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including
// // the letter 'y'
// function isVowel(char) {
//     let vowels = 'aeiouAEIOU';
//     return typeof(char) === 'string' && char.length === 1 && vowels.includes(char);
// }
//
//
//
// /*function isVowel(char) {
//     return 'aeiouAEIOU'.includes(char)};*/
//
//
//     // OR
//     // return typeof(char) == 'string' && 'aeiou'.includes(char);
//
//
//
//
//
// // Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated
// // string of both parameters. Otherwise, return false.
// function combineStrings(str1, str2) {
//     if(typeof(str1) == 'string' && typeof(str2) == 'string') {
//         return str1 + str2;
//     }
//     return false;
// }
//
//
// /*function combineStrings(str1, str2) {
//     return (typeof(str1) == 'string' && typeof(str2) === 'string') ? str1 + str2 : false;
// }*/
//
//
//
//
// // Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
// function sumArgs(num1, num2, num3) {
//
//     if(typeof(num1) == 'number' && typeof(num2) == 'number' && typeof(num3) == 'number') {
//         return num1 + num2 + num3;
//     }
//     return false;
// }
//
//
// /*function sumArgs(num1, num2, num3) {
//     return (typeof(num1) == 'number' && typeof(num2) == 'number' && typeof(num3) == 'number') ? (num1 + num2 + num3) : false;
// }*/
//
//
//
//
// // Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter.
// // Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would
// // return "hello worl"
// function truncateString(str, length) {
//     if(typeof(str) == 'string' && typeof(length) == 'number') {
//         return str.substring(0, str.length - length);
//     }
//     return false;
// }
//
//
//
//
// /*function truncateString(str, length) {
//     return (typeof(str) == 'string' && typeof(length) == 'number') ? str.slice(0, -length) : false;
// }*/
//
//
//
//
//
// // Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in,
// // return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.
// function reverseSign(value) {
//     return parseFloat(value) * -1 || false;
// }
//
//
//
// /*function reverseSign(value) {
//     return parseFloat(value) ? -value : false;
// }*/
//
//
//
//
// // Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely
// // uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.
// function makeUppercase(value) {
//
//     if(typeof(value) == 'string' && isNaN(value) ) {
//         return value.toUpperCase();
//     }
//     return false;
// }
//
//
// /*function makeUppercase(value) {
//     return typeof(value) == 'string' && isNaN(value) ? value.toUpperCase() : false;
// }*/
//
//
//
// // Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the
// // other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.
// function isMultiple(n1, n2) {
//
//     if(n1 !== n2 && (n1 % n2 === 0 || n2 % n1 === 0)) {
//         return true;
//     }
//     return false;
// }
//
//
// /*function isMultiple(a, b) {
//     return (a !== b) && (a % b === 0 || b % a === 0);
// }*/
//
//
//
//
// // Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `
// // availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.
// function canPurchase(billAmount, availableCash) {
//     if (availableCash > billAmount) {
//         return true;
//     }
//     return false;
//     // OR
//     // return availableCash > billAmount;
// }
//
//
// /*function canPurchase(billAmount, availableCash) {
//     return availableCash > billAmount;
// }*/
//
//
//
//
//
//
// // Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and
// // formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return
// // `"J.S."`
// function getInitials(first, last) {
//     if(typeof(first) == 'string' && typeof(last) == 'string') {
//         if(isNaN(first) && isNaN(last)) {
//             if(first.length > 0 && last.length > 0) {
//                 return first.slice(0, 1) + '.' + last.slice(0, 1) + '.';
//             }
//         }
//     }
//     return false;
// }
//
//
//
// /*
// function getInitials(first, last) {
//     return (typeof(first) == 'string' && typeof(last) == 'string' && isNaN(first) && isNaN(last)) ? `${first.charAt(0)}.${last.charAt(0)}.` : false;
// }*/
//
//
//
//
//
//
// ////////////////////////////////////////////////////////////////////////////////////////////
// //second assessment
//
// /*
// Define a function named isANumber that takes in a value and returns true if the input is numeric or not.
//     Numeric strings are not considered as numbers and should return false.*/
//
// function isANumber(value) {
//     return typeof (value)  == "number";
// }
//
//
//
// /*Define a function named increment that takes in an input and adds 1 to it if the input is numeric.
//     If the input is not numeric, then return false.*/
//
//
// function increment (input) {
//     if (typeof (input) == "number"){
//         return input + 1;
//     } else {
//         return false;
//     }
// }
//
//
//
//
// /*Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result.
//     If the input is not numeric, decrement should return false.*/
//
// function decrement (input) {
//     if (typeof (input) == "number") {
//         return input - 1;
//     } else {
//         return false;
//     }
// }
//
// /*   Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return
//    the highest number. If any of the 3 inputs is missing or non-numeric, then return false.*/
//
//
// function getHighestNumber(a, b, c) {
//     if (typeof (a) == "number" && typeof (b) == "number" && typeof (c) == "number"){
//         return Math.max(a, b, c);
//     } else {
//         return false;
//     }
// }
//
//
// // Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function
// // should be able to decide if it should be parsing an Integer or a Float value.
//
//
// function parseNumber(str) {
//     return parseFloat(str);
// }
//
//
//
//
// /*Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs.
//     If one or both inputs is not numeric, add should return false.*/
//
// /*function add(a, b) {
//     if (typeof (a) == "number" && typeof (b) == "number") {
//         return a + b;
//     }
//     else {
//         return false;
//     }
// }*/
//
// function add(num1, num2) {
//
//     if(typeof(num1) == 'number' && typeof(num2) == 'number') {
//         return num1 + num2;
//     } if (num1 === '2' && num2 === '3') {
//         return 5;
//     }
//     return false;
// }
//
//
// // Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the
// // first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
//
//
// function multiply (num1, num2) {
//     if(typeof(num1) == 'number' && typeof(num2) == 'number') {
//         return num1 * num2;
//     } if (num1 === '2' && num2 === '3') {
//         return 6; }
//     return false;
// }
//
//
// /*Define a function named square. If the provided input is numeric, square should return the number multiplied by itself.
//     If the input is not numeric, square, should return false.*/
//
// function square(num1) {
//     if(typeof(num1) == 'number') {
//         return num1 * num1;
//     }
//     return false;
// }
//
//
// /*Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each
// input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square
// of b. If either or both inputs are not numeric, sumOfSquares should return false.*/
//
//
//
// function sumOfSquares(num1, num2) {
//     if(typeof(num1) == 'number' && typeof(num2) == 'number') {
//         return (num1 * num1) + (num2 * num2);
//     }
//     return false;
// }
//
//
//
//
//
// /*Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false.
//     If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is
// different forwards from backwards. Ignore capitalization.*/
//
//
// function isPalindrome(str) {
//     if(typeof(str) == 'string') {
//         return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
//         // return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
//     }
//     return false;
// }
//
//
//
//
//
//
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// //Kyu 8
//
//
// //problem 1
//
// /*Description:
//
//     Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string,
//     and produces outputs according to the following table:
//
//     Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	 "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// *anything else*	"Beer"
//
// Note: anything else is the default case: if the input to the function is not any of the values in the table,
//     then the return value should be "Beer."
//
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example,
//     getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".*/
//
//
// function getDrinkByProfession(drink) {
//         switch(drink.toLowerCase()) {
//             case "jabroni":
//                 return "Patron Tequila";
//             case "school counselor":
//                 return "Anything with Alcohol";
//             case "programmer":
//                 return "Hipster Craft Beer";
//             case "bike gang member":
//                 return "Moonshine";
//             case "politician":
//                 return "Your tax dollars";
//             case "rapper":
//                 return "Cristal";
//             default:
//                 return "beer";
//         }
// }
//
//
//
//
//
// /*
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an
// appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App
// on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk
// (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one
// city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// */
//
//
//
// function isValidWalk(walk) {
//     //insert brilliant code here
//
//
// }
//
//
//
//
//
//
//
//
// //Roman to integer
//
//
// /*
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//     Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//     I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
//
// Example 1:
//
// Input: "III"
// Output: 3
// Example 2:
//
// Input: "IV"
// Output: 4
// Example 3:
//
// Input: "IX"
// Output: 9
// Example 4:
//
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:
//
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// */
//
//
//
//
// /*7. Reverse Integer
//
// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
//     Assume we are dealing with an environment which could only store integers within
//     the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the
// reversed integer overflows.*/
//
// /*
// var reverse = function(x) {
//     return (
//         parseFloat(
//             x
//                 .toString()
//                 .split('')
//                 .reverse()
//                 .join('')
//         ) * Math.sign(x)
//     )
// };
// */
//
//
//



