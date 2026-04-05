// ==========================================
// File: 03-functions-scope.js
// ==========================================

// Problem 11: Arrow Conversion
// Rewrite this function as a one-line arrow function.
// function calculateArea(width, height) { return width * height; }
const calculateArea = (width, height) => width * height;
console.log("Problem 11:", calculateArea(5, 10)); // Uncomment to test

// Problem 12: The Callback
// Write a function called greet that takes a name and a callback function.
// It should console.log a greeting, then execute the callback.
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
console.log("problem: 12");
greet("Developer", () => console.log("Callback executed!")); // Uncomment to test

// Problem 13: Scope Test
// Use var, let, and const inside an if block. Try to console.log all three outside the block and document what happens.
function testScope() {
  if (true) {
    var itvar = "it is var";
    let itlet = "it is let";
    const itconst = "it is const";
  }
  console.log(itvar);
  // console.log() them here:
}
testScope();
/* Document: 
    var access from outsite
    let const dont access, refferenceError
 */

// Problem 14: Basic Closure
// Write a function createCounter() that returns another function.
// Every time the returned function is called, it should increase a counter variable by 1 and return it.
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const myCounter = createCounter();
console.log("Problem 14:", myCounter(), myCounter(), myCounter()); // Expected: 1, 2, 3

// Problem 15: The Rest Operator
// Write a function sumAll(...args) that accepts any number of arguments and returns their total sum.
function sumAll(...args) {
  return args.reduce((sum, curr) => sum + curr, 0);
}
console.log("Problem 15:", sumAll(1, 2, 3, 4, 5)); // Expected: 15

learn;
