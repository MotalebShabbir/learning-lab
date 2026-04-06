/////////// Array practice
// ================================
// Problem 1 — Easy
// Given an array of numbers, return a new array with only the even numbers.
// Input:  [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
console.log("Problem 1");
const input = [1, 2, 3, 4, 5, 6, 8, 9, 10];
function even(arr) {
    const even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(arr[i]);
    }
    return even;
}
console.log(even(input))
// ================================
/* Problem 2 — Easy
Find the maximum number in an array without using Math.max().
Input:  [3, 7, 1, 9, 4]
Output: 9 */
console.log("Problem 2");
const input2 = [3, 7, 1, 9, 4];
let max = input2[0];
for (let i = 1; i < input2.length; i++) {
    if (input2[i] > max) max = input2[i];
}
console.log(max);
// ================================
/* Problem 3 — Medium
Given an array, return the two numbers that add up to a target sum. Assume exactly one solution exists.
Input:  [2, 7, 11, 15], target = 9
Output: [2, 7] */
console.log("Problem 3");
const arr = [2, 7, 11, 15];
const target = 9;
function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(twoSum(arr,target));
