# Array — Data Structure Notes

## What is an Array?
An array stores elements in **contiguous memory locations**.
Each element has an index starting from `0`.

## Memory Layout
Index:  [0]  [1]  [2]  [3]
Value:   1    2    3    4
↑
Base address
Elements sit next to each other in memory.
That's why accessing by index is instant — O(1).

## Big O Complexity

| Operation       | Time Complexity |
|----------------|-----------------|
| Access by index | O(1)           |
| Search          | O(n)           |
| Insert (end)    | O(1)           |
| Insert (middle) | O(n)           |
| Delete (end)    | O(1)           |
| Delete (middle) | O(n)           |

## Array vs Linked List

| Feature        | Array       | Linked List  |
|---------------|-------------|--------------|
| Memory        | Contiguous  | Scattered    |
| Access        | O(1)        | O(n)         |
| Insert/Delete | O(n)        | O(1)         |
| Size          | Fixed*      | Dynamic      |

