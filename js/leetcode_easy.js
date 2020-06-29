// 1. Two Sum

/*
Given an array of integers, return indices of the two numbers such
that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

    Example:

Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*var twoSum = function(nums, target) {
    const values = new Map()

    for (let i = 0; i < nums.length; i++) {
        const targetSubtract = target - nums[i]
        const matchingValue = values.get(targetSubtract)
        if (matchingValue !== undefined) {
            return [matchingValue, i]
        }
        values.set(nums[i], i)
    }
}*/



// 2. Reverse Integer

/*
Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
    Assume we are dealing with an environment which could only store integers within the 32-bit
    signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your
    function returns 0 when the reversed integer overflows.
*/
//step one turns into a string
//step two splits values in an array
// step three reverses the array
// step four joins the array back into a string
// step five the parse float, returns this value back into a number value
// step six, the sign multiplied will keep its original positive or negative value

function reversedNum(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}

/**
 * @param {number} x
 * @return {number}
    Another solution */
/*var reverse = function(x) {
    return (
        parseFloat(
            x
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(x)
    )
};*/


// 3. palindrome number

/*Determine whether an integer is a palindrome. An integer is a palindrome when it reads the
same backward as forward.

    Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
Therefore it is not a palindrome.
    Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    Follow up:

    Coud you solve it without converting the integer to a string?*/

