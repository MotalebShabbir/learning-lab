// =========================================
// Topic: Promises, async/await, Error Handling
// problem statement create by AI
// But solve the every problem myself
// =========================================
// ======== What I understanding

// =========================================
// Problem 19: Build a Promise
// Write a function called delay(ms) that returns a Promise.
// The promise should resolve with the message "Done after Xms" after X milliseconds.
function delay(ms) {
  // Your code here:
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(`Done after ${ms} ms`)
    },ms)
  })
}
delay(1000).then((msg) => console.log("Problem 19:", msg));
// Expected after 1 second: "Done after 1000ms"
// =========================================
// Problem 20: Promise Reject & Catch
// Write a function called divide(a, b) that returns a Promise.
//   - If b is 0: reject with Error("Cannot divide by zero")
//   - Otherwise: resolve with the result
function divide(a, b) {
    return new Promise((resolve, reject)=>{
      if(b == 0) reject("Cannot divide by zero")
      else resolve(a/b)
    }) 
  } 
divide(10, 2)
  .then((result) => console.log("Problem 20:", result))    // 5
  .catch((err) => console.log("Problem 20 error:", err.message));

divide(10, 0)
  .then((result) => console.log("Problem 20:", result))
  .catch((err) => console.log("Problem 20 error:", err.message)); // "Cannot divide by zero"


// Problem 21: async/await + try/catch
// Rewrite this promise chain using async/await.
// Original chain:
//   fetchUser().then(user => console.log(user)).catch(err => console.log(err))
//
// Use the mock function below. Write an async function called getUser() that:
//   - Awaits fetchUser()
//   - Logs the user
//   - Catches and logs any error
const fetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sabbir" }), 500));

async function getUser() {
  // Your code here:
}
getUser();


// Problem 22: Promise.all
// You have three async functions below.
// Use Promise.all to run them ALL in parallel and log the results together.
const getProducts = () =>
  new Promise((res) => setTimeout(() => res(["Phone", "Laptop"]), 300));
const getOrders = () =>
  new Promise((res) => setTimeout(() => res([{ id: 1 }, { id: 2 }]), 200));
const getUser2 = () =>
  new Promise((res) => setTimeout(() => res({ name: "Sabbir" }), 400));

async function loadDashboard() {
  // Your code here — use Promise.all:
}
loadDashboard();
// Expected (all logged together after ~400ms, NOT 900ms):
// products: ["Phone", "Laptop"]
// orders: [{ id: 1 }, { id: 2 }]
// user: { name: "Sabbir" }


// Problem 23: Promise.allSettled
// Some of these promises will fail. Use Promise.allSettled so that
// ALL results are collected — fulfilled AND rejected — then log each one.
const p1 = Promise.resolve("Success A");
const p2 = Promise.reject(new Error("Failed B"));
const p3 = Promise.resolve("Success C");

async function runAll() {
  // Your code here — use Promise.allSettled:
}
runAll();
// Expected:
// fulfilled → "Success A"
// rejected  → "Failed B"
// fulfilled → "Success C"


// Problem 24: Real-world async flow
// Write an async function called checkout(userId, productId) that:
//   1. Fetches the user (mock: returns { name, balance: 500 } after 200ms)
//   2. Fetches the product (mock: returns { name, price: 300 } after 200ms)
//   3. If user.balance >= product.price → logs "Purchase successful"
//   4. If not → throws Error("Insufficient balance")
//   5. Wraps everything in try/catch and logs any error message
const mockFetchUser = (id) =>
  new Promise((res) => setTimeout(() => res({ name: "Sabbir", balance: 500 }), 200));
const mockFetchProduct = (id) =>
  new Promise((res) => setTimeout(() => res({ name: "Laptop", price: 300 }), 200));

async function checkout(userId, productId) {
  // Your code here:
}
checkout(1, 101);
