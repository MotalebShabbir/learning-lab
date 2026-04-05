// ==========================================
// File: 02-control-flow.js
// ==========================================

// Problem 6: The Classic FizzBuzz
// Write a loop that prints 1 to 100. Multiples of 3 print "Fizz", multiples of 5 print "Buzz", both print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let message = `${i}:`;
    if (i % 5 == 0 && i % 3 == 0) message += "FizzBuzz";
    else if (i % 3 == 0) message += "Fizz";
    else if (i % 5 == 0) message += "Buzz";
    console.log(message);
  }
}
fizzBuzz();

// Problem 7: Multiplication Table
// Write a for loop that prints the multiplication table (1 through 10) for a given number n.
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let line = `${i}*${n} = ${i * n}`;
    console.log(line);
  }
}
printTable(5); // Uncomment to test

// Problem 8: Switch Case Menu
// Write a function that takes a day number (1-7) and uses a switch statement to return the day name.
function getDayName(dayNum) {
  if (dayNum == 1) console.log("Sunday");
  else if (dayNum == 2) return "Monday";
  else if (dayNum == 3) return "Tuesday";
  else if (dayNum == 4) return "Wednessday";
  else if (dayNum == 5) return "Thusday";
  else if (dayNum == 6) return "Friday";
  else if (dayNum == 7) return "Saturday";
  return "invaild number";
}
console.log("Problem 8:", getDayName(3)); // Expected: "Tuesday" (assuming 1 is Sunday)

// Problem 9: While Loop Factorial
// Write a while loop that calculates the factorial of a given number (e.g., 5! = 120).
function factorial(n) {
  let result = 1;
  while (n) {
    result *= n;
    n--;
  }
  return result;
}
console.log("Problem 9:", factorial(5)); // Expected: 120

// Problem 10: Vowel Counter
// Write a function that takes a string and counts how many vowels (a, e, i, o, u) it contains using a for...of loop.
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") count++;
  }
  return count;
}
console.log("Problem 10:", countVowels("hello world")); // Expected: 3
