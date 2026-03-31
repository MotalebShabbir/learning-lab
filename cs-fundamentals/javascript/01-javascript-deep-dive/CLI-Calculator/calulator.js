// command line calculator

// create input method
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create ask function to get user input
async function ask(questtion) {
  return new Promise((res, rej) => {
    rl.question(questtion, (input) => {
      res(input);
    });
  });
}

// valid number check
async function takeNumber(msg) {
  while (true) {
    let num = await ask(msg);
    num = parseFloat(num);
    if (Number.isFinite(num)) return num;
    else console.log("Invaild!", num + 1);
  }
}
async function validOpertor(msg) {
  let op = await ask(msg);
  while (true) {
    if (op == "+") return 1;
    else if (op == "-") return 2;
    else if (op == "*") return 3;
    else if (op == "/") return 4;
    else if (op == "%") return 5;
    else console.log("Invaild!");
  }
}
// create calculator
async function calculator() {
  let num1 = await takeNumber("Enter first number: ");
  let num2 = await takeNumber("Enter second number: ");
  let op = await validOpertor("Enter operator + - * / %: ");
  let result = "Answer is: ";
  if (op == 1) result += num1 + num2;
  else if (op == 2) result += num1 - num2;
  else if (op == 3) result += num1 * num2;
  else if (op == 4) {
    if (num2 === 0) {
      result = "Cannot divide by zero.";
    } else result += num1 / num2;
  } else if (op == 5) result += num1 % num2;
  console.log(result);
  if ((await ask("Again? y/n: ")) === "y") calculator();
  else rl.close();
}
calculator();
