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
//-------------------------------------------------------------------------------------


// Assessment Review Arrays and Objects

// Welcome to your JS 3rd Assessment Review. This will include some things from the previous assessments, as well as Array and Object manipulation. Below are some practice questions for you to get started.

// TODO: Write a function named 'typeOfValue' that takes in a value and returns its type.
const typeOfValue = function (value) {
    if (Array.isArray(value)) {
        return "array";
    }
    return typeof(value);
}

console.log(typeOfValue("hello")); // "string"
console.log(typeOfValue(123)); // "number"
console.log(typeOfValue([])); // "object"
console.log(typeOfValue([4, 5, 6])); // "object"

// TODO: Write a function 'isPositive' that takes in a number and returns true or false based on whether the input is positive.
// isPositive(2) // true
// isPositive(-4) // false
// isPositive(0) // false

// TODO: Write a function 'removeElement' that takes in an array and a value, and returns an Array with the first instance of the indicated value removed.


const removeElement = function (arr, val) {
    // let index = arr.indexOf(val);
    // if (index > -1) {
    //     arr.splice(index,1)
    // }
    // return arr;


    //alternatively
    let arr2 = [];
    let found = false;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === val && !found) {
            found = true;
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}






console.log(removeElement([1, 2, 3, 4, 5], 4)); // returns [1,2,3,5]
console.log(removeElement([2, 2, 4, 4, 5], 2)); // returns [2,4,4,5]
console.log(removeElement([10], 10)); // returns []

// TODO: Write a function 'sumOfNumbers' that takes in an array of numbers and returns
//  the sum of all values.

const sumOfNumbers = function (arr) {
    /*let sum = 0;
    for (let i=0;i<arr.length; i++) {
        sum += arr[i];
    }*/

    //alternative
    arr.forEach(function (item) {
        sum += item;
    })
    return sum;
}


console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumOfNumbers([-1, 15])); // 14

// TODO: Write a function 'evensIndex' that takes in an array of numbers and returns
//  an array containing the index values of all even numbers.


// evensIndex([1,2,3,4,5,6]) // returns [1,3,5]
// evensIndex([3,7,11,12]) // returns [3]
// evensIndex([5,5,7,13]) // returns []



// TODO: Write a function 'stringToArray' that takes in a comma separated list and
//  returns it as an array.


// stringToArray("red,orange,yellow,green,blue") // returns ['red','orange',
// 'yellow','green','blue']
//
// stringToArray("1,2,3") // returns ['1','2','3']
// stringToArray("dog") // returns ['dog']
// Given the following array of objects, write a function 'findUsers' that returns an Array of usernames.
//     var myMac = {};
// myMac.users = [
//     {
//         username: "sophie",
//         id: 1
//     },
//     {
//         username: "vivian",
//         id: 2
//     },
//     {
//         username: "david",
//         id: 3
//     }
// ];
//
// findUsers(myMac.users) // returns ['sophie','vivian','david']

// TODO: Write a function 'addRole' that accepts the array of objects, then adds the
//  property 'role' to each object with a value of 'instructor.' The results should
//  look like this:
// addRole("instructor");
//
// [
//     {
//         username: "sophie",
//         id: 1,
//         role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];

//one method drawing from global
/*const addRole = function (role) {
    for (let i=0;i<myMac.users.length;i++){
        myMac.users[i].role = role;
    }
}*/



//alternatively
const  addRole = function (role) {
    myMac.users.forEach(function (item) {
        item.role = role;
    })
}

console.log(myMac.users);
addRole("instructor");
console.log(myMac.users);

// TODO: Write a function 'countLetters' that takes in a string and a character, and
//  counts the number of instances of that character in the string.

const countLetters = function (str, char) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            num++;
        }
    }
    return num;
}


// countLetters("banana", "a") // returns 3
// countLetters("Bob", "b") // returns 2
// countLetters("javascript", "x") // returns 0
// ####BONUS:
//





// TODO: Write a function 'countAll' that takes in an array of strings and returns an
//  array with the count of a character for each string. You may be able to use your
//  countLetters function here.

const countAll = function (strings, letter) {
    let answer = [];
    for (let i=0; i<strings.length; i++) {
        countLetters(strings[i], letter)
        //or answer.push(countLetters(strings[i], letter));
    }
}

// countAll(["banana", "html", "java"], "a") // returns [3,0,2]
// countAll(["push", "your", "commits"], "u") // returns [1,1,0]





//given the following array of objects, write a function'find users' that returns an
//array or usernames

var myMac = {};

myMac.users = [
    {username: "sophie", id:1},
    {username: "tommy", id:2},
    {username: "johnny", id:3}
];

const findUsers = function (usersArray) {
    let usernames = [];
    for (let i=0; i<usersArray.length; i++) {
        usernames.push(usersArray[i].username);
    }
}

console.log(findUsers()); //['sophie, vivian, david']




// ---------------------------------------------------------------------------------------------------------------

// Define a function `reverseArrayString` that accepts one argument,
// a string of comma separated values. It should reverse the order of the values and return a string.
// Eg. reverseArrayString("1,2,3") should return "3,2,1"



// Define a function `swapFirstLast` that accepts one argument, an array. It should take the first
// and last elements, and swap their positions in the array.
// Eg. swapFirstLast([0,2,4]) should return [4,2,0]



// Define a function `chopDNA` that accepts one argument, an array of strings. It should iterate the
// array, if the element is the stop codon "TAG", chop off the rest of the array and return it.
// Eg. chopDNA(["CCC", "AGG", "TAA", "CAA"]) should return ["CCC", "AGG", "TAA"]



// Define a function `sortByViews` that accepts one argument, an array of objects. It should iterate
// the array and sort the objects by their `views` property.



// TODO This array of objects is just for reference, you can leave it commented
// let videos = [
//   {
//     name: "Keyboard Cat",
//     views: 59000000
//   },
//   {
//     name: "Charlie Bit My Finger",
//     views: 875000000
//   },
//   {
//     name: "Rick Astley - Never Gonna Give You Up",
//     views: 721000000
//   },
// ];

