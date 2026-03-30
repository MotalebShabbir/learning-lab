// ==========================================
// Topic: Callback Functions & Higher-Order Functions
// problem statement create by AI
// But solve the every problem myself
// ==========================================
// ========> What is understand
// => Callback is a function that pass as argument to another function for execute later.
// => HOF mean takes one or more function as arguments and return new result
// => closure is a function combined environment, allow an inner function to access and remember variables from an outer function even after that outer function has finished executing
// ==========================================
// Problem 13: Write a HOF
// Write a function called operate(a, b, callback) that:
//   - Takes two numbers and a callback function
//   - Passes a and b to the callback
//   - Returns the result
// Then call it with add, subtract, and multiply callbacks.
function operate(a, b, callback) {
  // Your code here:
  return callback(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
console.log("Problem 13:", operate(10, 5, add)); // 15
console.log("Problem 13:", operate(10, 5, subtract)); // 5
console.log("Problem 13:", operate(10, 5, multiply)); // 50
//=============================================
// Problem 14: Custom forEach
// Write your OWN version of Array.forEach called myForEach(arr, callback).
// Do NOT use the built-in .forEach inside.
function myForEach(arr, callback) {
  // Your code here:
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1, 2, 3], (item, index) => {
  console.log(`Problem 14: index ${index} = ${item}`);
});
// Expected:
// index 0 = 1
// index 1 = 2
// index 2 = 3
//=======================================
// Problem 15: Custom Map
// Write your OWN version called myMap(arr, callback) that returns a new array.
// Do NOT use the built-in .map inside.
function myMap(arr, callback) {
  // Your code here:
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
const doubled = myMap([1, 2, 3, 4], (n) => n * 2);
console.log("Problem 15:", doubled); // Expected: [2, 4, 6, 8]
//=========================================
// Problem 16: Function Factory
// Write a function called makeMultiplier(factor) that RETURNS a new function.
// The returned function should multiply its argument by factor.
function makeMultiplier(factor) {
  // Your code here:
  return function (number) {
    return factor * number;
  };
}
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
console.log("Problem 16:", triple(5)); // 15
console.log("Problem 16:", double(7)); // 14
//=======================================================
// Problem 17: Once
// Write a function called once(fn) that returns a new function.
// The returned function can only call fn ONE time — after that it silently does nothing.
function once(fn) {
  // Your code here:
  let isInitize = false;
  return function () {
    if (isInitize === false) {
      isInitize = true;
      return fn();
    }
  };
}
const initialize = once(() => console.log("Initialized!"));
initialize(); // logs "Initialized!"
initialize(); // nothing happens
initialize(); // nothing happens
//================================================
// Problem 18: Pipeline
// Write a function called pipe(...fns) that takes any number of functions
// and returns a new function. When called with a value, it passes the value
// through each function left to right.
function pipe(...fns) {
  // Your code here:
  return function (x) {
    fns.forEach((n) => {
      x = n(x);
    });
    return x;
  };
}
const process = pipe(
  (x) => x * 2, // 5 → 10
  (x) => x + 3, // 10 → 13
  (x) => `Result: ${x}`, // 13 → "Result: 13"
);
console.log("Problem 18:", process(5)); // Expected: "Result: 13"
