// ==========================================
// File: 01-variables-coercion.js
// ==========================================

// Problem 1: Variable Swap
// Swap the values of a and b without using a third temporary variable.
let a = 10;
let b = 20;
// Your code here:
[a, b] = [b, a];
console.log("Problem 1:", { a, b }); // Expected: { a: 20, b: 10 }

// Problem 2: The Type Checker
// Write a function that takes any value and returns its data type.
// Make sure it correctly identifies null and arrays.
function checkType(value) {
  // Your code here:
  return typeof value;
}
console.log("Problem 2:", checkType("text"), checkType([]), checkType(42));

// Problem 3: Coercion Prediction
// Predict the output of 5 + "5" - 5. Write your prediction in a comment, then test it.
// Your prediction: 50
const coercionResult = 5 + "5" - 5;
console.log("Problem 3:", coercionResult);

// Problem 4: Truthy/Falsy Bouncer
// Write a function that takes an array of mixed data types and returns a new array containing only the truthy values.
function bouncer(arr) {
  return arr.filter((d) => d);
}
console.log("Problem 4:", bouncer([7, "ate", "", false, 9, NaN, null])); // Expected: [7, "ate", 9]

// Problem 5: Strict vs Loose
// Write a small script demonstrating three edge cases where == and === give different results.
// Your code here:
console.log(`Problem 5: '5' == 5: ${"5" == 5} but '5' === 5: ${"5" === 5}`);
