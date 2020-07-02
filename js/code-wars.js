"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


// Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any
// other situation. You do not need to consider floating-point and decimal numbers.
function isOdd(num) {

    if(num % 2 == 1) {
        return true;
    }
    return false;
}


/*function isOdd(num) {
    return parseFloat(num) ? num % 2 !== 0 : false;
}*/



// Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including
// the letter 'y'
function isVowel(char) {
    let vowels = 'aeiouAEIOU';
    return typeof(char) === 'string' && char.length === 1 && vowels.includes(char);
}



/*function isVowel(char) {
    return 'aeiouAEIOU'.includes(char)};*/


    // OR
    // return typeof(char) == 'string' && 'aeiou'.includes(char);





// Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated
// string of both parameters. Otherwise, return false.
function combineStrings(str1, str2) {
    if(typeof(str1) == 'string' && typeof(str2) == 'string') {
        return str1 + str2;
    }
    return false;
}


/*function combineStrings(str1, str2) {
    return (typeof(str1) == 'string' && typeof(str2) === 'string') ? str1 + str2 : false;
}*/




// Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
function sumArgs(num1, num2, num3) {

    if(typeof(num1) == 'number' && typeof(num2) == 'number' && typeof(num3) == 'number') {
        return num1 + num2 + num3;
    }
    return false;
}


/*function sumArgs(num1, num2, num3) {
    return (typeof(num1) == 'number' && typeof(num2) == 'number' && typeof(num3) == 'number') ? (num1 + num2 + num3) : false;
}*/




// Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter.
// Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would
// return "hello worl"
function truncateString(str, length) {
    if(typeof(str) == 'string' && typeof(length) == 'number') {
        return str.substring(0, str.length - length);
    }
    return false;
}




/*function truncateString(str, length) {
    return (typeof(str) == 'string' && typeof(length) == 'number') ? str.slice(0, -length) : false;
}*/





// Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in,
// return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.
function reverseSign(value) {
    return parseFloat(value) * -1 || false;
}



/*function reverseSign(value) {
    return parseFloat(value) ? -value : false;
}*/




// Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely
// uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.
function makeUppercase(value) {

    if(typeof(value) == 'string' && isNaN(value) ) {
        return value.toUpperCase();
    }
    return false;
}


/*function makeUppercase(value) {
    return typeof(value) == 'string' && isNaN(value) ? value.toUpperCase() : false;
}*/



// Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the
// other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.
function isMultiple(n1, n2) {

    if(n1 !== n2 && (n1 % n2 === 0 || n2 % n1 === 0)) {
        return true;
    }
    return false;
}


/*function isMultiple(a, b) {
    return (a !== b) && (a % b === 0 || b % a === 0);
}*/




// Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `
// availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.
function canPurchase(billAmount, availableCash) {
    if (availableCash > billAmount) {
        return true;
    }
    return false;
    // OR
    // return availableCash > billAmount;
}


/*function canPurchase(billAmount, availableCash) {
    return availableCash > billAmount;
}*/






// Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and
// formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return
// `"J.S."`
function getInitials(first, last) {
    if(typeof(first) == 'string' && typeof(last) == 'string') {
        if(isNaN(first) && isNaN(last)) {
            if(first.length > 0 && last.length > 0) {
                return first.slice(0, 1) + '.' + last.slice(0, 1) + '.';
            }
        }
    }
    return false;
}



/*
function getInitials(first, last) {
    return (typeof(first) == 'string' && typeof(last) == 'string' && isNaN(first) && isNaN(last)) ? `${first.charAt(0)}.${last.charAt(0)}.` : false;
}*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//problem 1

/*Description:

    Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string,
    and produces outputs according to the following table:

    Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	 "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
*anything else*	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table,
    then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example,
    getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".*/


function getDrinkByProfession(drink) {
        switch(drink.toLowerCase()) {
            case "jabroni":
                return "Patron Tequila";
            case "school counselor":
                return "Anything with Alcohol";
            case "programmer":
                return "Hipster Craft Beer";
            case "bike gang member":
                return "Moonshine";
            case "politician":
                return "Your tax dollars";
            case "rapper":
                return "Cristal";
            default:
                return "beer";
        }
}






