// ==========================================
// File: 05-event-loop-algorithms.js
// Topic: Event Loop Understanding + Logic Problems
// Week 2 — Advanced JavaScript
// ==========================================

// Problem 25: Predict the Output
// Study this code carefully and write the EXACT output in the comments.
// Do NOT run it first — think it through using your knowledge of the event loop.
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Write your prediction as a comment before running:
// Predicted order: ?

// Problem 26: Predict the Output (harder)
// Same rule — predict before running.
async function run() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
run();
console.log("4");

// Predicted order: ?

// Problem 27: Fix the Bug — Async in Loop
// This code has a classic async bug. ALL console.logs print 3 instead of 0, 1, 2.
// Fix it using let OR an async IIFE inside the loop. Both approaches are valid.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("Problem 27 (buggy):", i), 100);
}
// Write your fixed version below:

// Problem 28: Retry Logic
// Write an async function called retry(fn, times) that:
//   - Calls fn() and awaits the result
//   - If fn() throws, it retries up to `times` total attempts
//   - If all attempts fail, it throws the last error
//   - Log each attempt number
let attempt = 0;
const flakyTask = () =>
  new Promise((res, rej) => {
    attempt++;
    if (attempt < 3) rej(new Error(`Failed on attempt ${attempt}`));
    else res("Finally succeeded!");
  });

async function retry(fn, times) {
  // Your code here:
}
retry(flakyTask, 5).then(console.log).catch(console.error);
// Expected:
// Attempt 1... (fail)
// Attempt 2... (fail)
// Attempt 3... Finally succeeded!

// Problem 29: Debounce
// Write a function called debounce(fn, delay) that returns a new function.
// The new function delays calling fn by `delay` ms.
// If called again before the delay ends, it resets the timer.
// (This is used in search boxes to avoid calling API on every keystroke.)
function debounce(fn, delay) {
  // Your code here:
}
const search = debounce((query) => console.log("Searching:", query), 300);
search("s");
search("sa");
search("sab");
search("sabb");
search("sabби");
// Expected: only ONE log → "Searching: sabbir" (after 300ms of silence)

// Problem 30: Async Queue
// Write a class AsyncQueue with:
//   - enqueue(task): adds an async task (a function returning a Promise)
//   - A processor that runs tasks ONE AT A TIME (not in parallel)
//   - Log when each task starts and finishes
class AsyncQueue {
  constructor() {
    // Your code here:
  }
  enqueue(task) {
    // Your code here:
  }
}

const queue = new AsyncQueue();
const makeTask = (name, ms) => () =>
  new Promise((res) => {
    console.log(`Starting: ${name}`);
    setTimeout(() => {
      console.log(`Done: ${name}`);
      res();
    }, ms);
  });

queue.enqueue(makeTask("Task A", 500));
queue.enqueue(makeTask("Task B", 300));
queue.enqueue(makeTask("Task C", 200));
// Expected (sequential, NOT parallel):
// Starting: Task A → Done: Task A → Starting: Task B → Done: Task B → ...
