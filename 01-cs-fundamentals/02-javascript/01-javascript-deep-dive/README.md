# JavaScript Deep Dive 🚀

> **30 problems** across 6 files — fundamentals to algorithms.
> Problem statements by mentor (senior engineer). Every solution implemented independently.

---

## Topics Covered

- [x] Variables, data types, type coercion, `==` vs `===`
- [x] Control flow — `if/else`, `switch`, `for`, `while`, `for...of`
- [x] Functions — declarations, expressions, arrow functions, closures
- [x] Scope — global, local, block scope (`var` / `let` / `const`)
- [x] Array methods — `map`, `filter`, `reduce`, `find`, `some`, `every`
- [x] Algorithm patterns — palindrome, deduplication, flattening, grouping

## Practice Log

| #   | Topics & Practice code                                                                    | Score |
| --- | ----------------------------------------------------------------------------------------- | ----- |
| 1   | [Variable swap, type checking, truthy/falsy, strict equality](./01-variables-coercion.js) | 4/5   |
| 2   | [FizzBuzz, loops, switch, for...of](./02-control-flow.js)                                 | 4/5   |
| 3   | [Arrow functions, callbacks, closures, rest operator](./03-functions-scope.js)            | 4/5   |
| 4   | [map, filter, find, some, every](./04-array-methods-basic.js)                             | 5/5   |
| 5   | [reduce (sum, max, tally), method chaining](./05-array-methods-advanced.js)               | 5/5   |
| 6   | [String reversal, palindrome, dedup, flatten, group by](./06-algorithm-logic.js)          | 5/5   |

**Total: 26/30** — reviewed & scored by AI mentor

## AI Mentor Feedback

Issues found, understood, and fixed:

- **`checkType()`** — `typeof []` and `typeof null` both return `"object"`. Fixed with `Array.isArray()` and an explicit `null` check.
- **`getDayName()`** — problem required `switch`; used `if/else` instead. Rewrote correctly.
- **`countVowels()`** — problem required `for...of`; used regular `for`. Rewrote correctly.
- **`allLong`** — condition was `>= 3` instead of `> 3`. Fixed.

> Reading instructions carefully matters as much as writing correct code.
