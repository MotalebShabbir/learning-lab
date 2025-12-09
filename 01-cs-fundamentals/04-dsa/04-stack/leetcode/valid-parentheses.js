/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    // If it's an opening bracket, push to stack
    if (c == "(" || c == "{" || c == "[") {
      stack.push(c);
    }
    // If it's a closing bracket, check the top of the stack
    else if (c == ")" && stack[stack.length - 1] != "(") {
      return false;
    } else if (c == "}" && stack[stack.length - 1] != "{") {
      return false;
    } else if (c == "]" && stack[stack.length - 1] != "[") {
      return false;
    }
    // If matches, remove the opening bracket from stack
    else {
      stack.pop();
    }
  }

  // If stack is empty, all brackets were matched correctly
  if (stack.length > 0) return false;
  return true;
};

// test case
const runTests = () => {
  const tests = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "(", expected: false }, // Single opening
    { input: "]", expected: false }, // Single closing
    { input: "", expected: true }, // Empty string (usually considered valid)
  ];

  tests.forEach(({ input, expected }, index) => {
    const result = isValid(input);
    const passed = result === expected ? "✅ PASSED" : "❌ FAILED";
    console.log(
      `Test ${index + 1}: Input: "${input}" | Expected: ${expected} | Result: ${result} ${passed}`,
    );
  });
};

runTests();
