# Queue Data Structure

## What is a Queue?

A Queue is a linear data structure that follows **FIFO** — First In, First Out.

Think of a real queue (line of people). First person in line is first to be served. No cutting.

```
enqueue(10) → [10]
enqueue(20) → [10, 20]
enqueue(30) → [10, 20, 30]
dequeue()   → returns 10  →  [20, 30]
front()     → returns 20  →  [20, 30] (unchanged)
```

---

## Core Operations

| Method       | Description                         | Time Complexity |
| ------------ | ----------------------------------- | --------------- |
| `enqueue(v)` | Add value to back of queue          | O(1)            |
| `dequeue()`  | Remove and return front value       | O(n)\*          |
| `front()`    | Return front value without removing | O(1)            |
| `isEmpty()`  | Returns true if queue has no items  | O(1)            |
| `size()`     | Returns number of items             | O(1)            |

`dequeue()` uses `Array.shift()` which is O(n) — every element shifts left after removal.
A production Queue uses a head pointer index to achieve O(1) dequeue without shifting.

---

## Real World Use Cases

- **Printer queue** — first document sent is first printed
- **Task scheduling** — CPU processes tasks in the order they arrive
- **BFS (Breadth First Search)** — graph/tree traversal uses a queue to explore level by level
- **Event loop** — JavaScript's callback queue is a real queue
- **Customer support tickets** — oldest ticket handled first

---

## Implementation

See [`queue.js`]('queue.js') in this folder for the full JavaScript implementation. [file link]('./queue.js')

## Stack vs Queue — Key Difference

| Feature  | Stack          | Queue           |
| -------- | -------------- | --------------- |
| Order    | LIFO           | FIFO            |
| Add      | push — top     | enqueue — back  |
| Remove   | pop — top      | dequeue — front |
| Use case | Undo, back btn | BFS, scheduling |

---
