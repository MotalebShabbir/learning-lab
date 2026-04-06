// ==========================================
// Topic: Spread & Rest Operators + Template Literals
// ==========================================
// Problem 7: Merge Without Mutation
// Merge arr1 and arr2 into a new array called merged.
// Do NOT use push or concat — use spread.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Your code here:
const arr3 = [...arr1, ...arr2]
console.log("Problem 7:", arr3); // Expected: [1, 2, 3, 4, 5, 6]
// ==========================================
// Problem 8: Object Update (Immutable Style)
// Create a new object updatedUser where age is changed to 26.
// The original user object must remain unchanged.
const user = { name: "Sabbir", age: 25, city: "Dhaka" };
const updatedUser = { ...user, age: 26 }; 
console.log("Problem 8 original:", user);
console.log("Problem 8 updated:", updatedUser); 
// ==========================================
// Problem 9: Rest in Destructuring
// Destructure a and b from the array.
// Collect everything else into a variable called others.
const nums = [10, 20, 30, 40, 50];
// Your code here:
const [a, b, ...others] = nums;
console.log("Problem 9:", a, b, others );
// Expected: a = 10, b = 20, others = [30, 40, 50]
// ==========================================
// Problem 10: Variadic Sum
// Write a function called sumAll that accepts ANY number of arguments
// using rest parameters and returns their sum.
function sumAll(...args) {
  // Your code here:
  return args.reduce((sum, curr)=>sum+curr)
}
console.log("Problem 10:", sumAll(1, 2, 3, 4, 5)); // Expected: 15
console.log("Problem 10:", sumAll(10, 20));          // Expected: 30
// ==========================================
// Problem 11: Clone & Extend
// Given the defaults object, create a new config object that:
//   1. Copies all properties from defaults
//   2. Overrides theme to "dark"
//   3. Adds a new property: language: "bn"
const defaults = { theme: "light", fontSize: 16, debug: false };
// Your code here:
const config = {...defaults}
config.theme = 'dark';
config.language = 'bn'
console.log("Problem 11:", config);
// Expected: { theme: "dark", fontSize: 16, debug: false, language: "bn" }
// ==========================================
// Problem 12: Template Literal Invoice
// Build an invoice string using a template literal.
// It must be multi-line and show: item name, quantity, unit price, and total.
const item = "Notebook";
const qty = 3;
const unitPrice = 120;
// Your code here — use a template literal:
const invoice = `
Item : ${item}
Qty : ${qty}
Total : ${item*qty}
`; // fill this in
console.log("Problem 12:", invoice);
// Expected output (multi-line):
// Item: Notebook
// Qty: 3 × 120 BDT
// Total: 360 BDT
