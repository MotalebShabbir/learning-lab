var MinStack = function () {
  this.stack = [];
  this.minimum = [];
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  const len = this.minimum.length;
  if (len == 0) this.minimum.push(val);
  else if (this.minimum[len - 1] >= val) this.minimum.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (
    this.stack[this.stack.length - 1] == this.minimum[this.minimum.length - 1]
  ) {
    this.minimum.pop();
  }
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length == 0) return null;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimum[this.minimum.length - 1];
};

// =========== TestCase
// 1. Initialize
var obj = new MinStack();

// 2. Push operations
obj.push(-2);
obj.push(0);
obj.push(-3);

console.log("Current Min:", obj.getMin()); // Expected: -3
console.log("Top Element:", obj.top()); // Expected: -3

// 3. Pop the top element (-3)
obj.pop();

console.log("Top after pop:", obj.top()); // Expected: 0
console.log("Min after pop:", obj.getMin()); // Expected: -2 (Min shifts back)

// 4. Test duplicate minimums
obj.push(-2);
console.log("Min after pushing duplicate -2:", obj.getMin()); // Expected: -2
obj.pop();
console.log("Min after popping duplicate:", obj.getMin()); // Expected: -2
