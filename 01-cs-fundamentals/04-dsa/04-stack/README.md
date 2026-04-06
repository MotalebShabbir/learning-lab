# Stack Data Structure

## What is a Stack?

A Stack is a linear data structure that follows **LIFO** — Last In, First Out.

Think of a stack of plates. You add to the top, you remove from the top. The last plate placed is the first plate taken.

```
push(10) → [10]
push(20) → [10, 20]
push(30) → [10, 20, 30]
pop()    → returns 30  →  [10, 20]
peek()   → returns 20  →  [10, 20] (unchanged)
```

---

## Core Operations

| Method      | Description                        | Time Complexity |
|-------------|------------------------------------|-----------------|
| `push(v)`   | Add value to top of stack          | O(1)            |
| `pop()`     | Remove and return top value        | O(1)            |
| `peek()`    | Return top value without removing  | O(1)            |
| `isEmpty()` | Returns true if stack has no items | O(1)            |
| `size()`    | Returns number of items            | O(1)            |

All operations are O(1) — no loops, no walking. That is the power of Stack.

---

## Real World Use Cases

- **Browser back button** — every page visited is pushed. Back button pops.
- **Undo / Redo** — every action pushed. Ctrl+Z pops the last action.
- **Call stack** — every function call is pushed. Return pops it.
- **Valid parentheses** — open brackets pushed, closed brackets pop and verify.

---

## Key Insight

Stack is not about complexity — it's about **constraint.**  
By restricting access to one end only, you create predictable, ordered behavior.  
That constraint is exactly what makes it useful for undo systems, parsing, and recursion simulation.