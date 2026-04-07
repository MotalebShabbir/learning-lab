# Queue Data Structures

---

## 1. Queue — FIFO

First In, First Out. Like a real line — first person served first.

```
enqueue(10) → [10]
enqueue(20) → [10, 20]
dequeue()   → returns 10 → [20]
front()     → returns 20
```

| Method  | Time   |
| ------- | ------ |
| enqueue | O(1)   |
| dequeue | O(n)\* |
| front   | O(1)   |

\*`shift()` moves every element left. Use head pointer for O(1).

**Use cases:** Printer queue, BFS traversal, CPU scheduling, JS Event Loop.

---

## 2. Deque — Double-Ended Queue

Add and remove from **both ends.** Stack + Queue combined.

```
addBack(10)   → [10]
addBack(20)   → [10, 20]
addFront(5)   → [5, 10, 20]
removeFront() → returns 5  → [10, 20]
removeBack()  → returns 20 → [10]
```

| Method      | Time   |
| ----------- | ------ |
| addBack     | O(1)   |
| addFront    | O(n)\* |
| removeBack  | O(1)   |
| removeFront | O(n)\* |

\*`unshift/shift` are O(n). Use Doubly LinkedList internally for O(1) all sides.

**Use cases:** Sliding window problems, undo/redo, palindrome check.

---

## 3. Circular Queue — Fixed-Size Ring Buffer

Fixed capacity. Rear pointer wraps around to reuse empty front slots.

```
capacity = 4
enqueue(10) → [10,  _,  _,  _]
enqueue(20) → [10, 20,  _,  _]
dequeue()   → [ _, 20,  _,  _]  front moves
enqueue(50) → [50, 20,  _,  _]  rear wraps around
```

Key math:

```js
this.rear = (this.rear + 1) % this.capacity; // wraps around
```

| Method  | Time |
| ------- | ---- |
| enqueue | O(1) |
| dequeue | O(1) |
| isFull  | O(1) |
| isEmpty | O(1) |

**Use cases:** CPU round-robin scheduling, audio/video stream buffer, keyboard input buffer.

---

## Quick Comparison

| Feature   | Queue      | Deque          | Circular Queue |
| --------- | ---------- | -------------- | -------------- |
| Add       | back only  | front + back   | back (wraps)   |
| Remove    | front only | front + back   | front (wraps)  |
| Size      | dynamic    | dynamic        | fixed          |
| Key trick | shift()    | unshift/shift  | modulo %       |
| Best for  | BFS, order | sliding window | buffers        |
