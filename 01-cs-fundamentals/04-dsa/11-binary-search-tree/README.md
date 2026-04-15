# Binary Search Tree (BST) — Short Notes

## 1. Binary Tree Vocabulary

| Term   | Meaning                               |
| ------ | ------------------------------------- |
| Root   | Top node, no parent                   |
| Node   | Any single element                    |
| Leaf   | Node with no children                 |
| Height | Longest path from node down to a leaf |
| Depth  | Distance from root down to a node     |

```
        10          ← root, depth=0
       /  \
      5    15       ← depth=1
     / \     \
    3   7     20   ← leaf nodes, depth=2

Height of tree = 2
```

---

## 2. Tree Traversals

| Traversal | Order     | Output (above tree) |
| --------- | --------- | ------------------- |
| Inorder   | L → N → R | 3, 5, 7, 10, 15, 20 |
| Preorder  | N → L → R | 10, 5, 3, 7, 15, 20 |
| Postorder | L → R → N | 3, 7, 5, 20, 15, 10 |

> Inorder of a BST always produces **sorted output**.

```js
function inorder(node, result = []) {
  if (node === null) return result;
  inorder(node.left, result); // L
  result.push(node.value); // N
  inorder(node.right, result); // R
  return result;
}
```

---

## 3. BST Rule

> For every node:
>
> - Left subtree → all values **smaller**
> - Right subtree → all values **larger**

This gives **O(log n)** search — half the tree is eliminated at every step.

---

## 4. BST Operations

| Operation | Average  | Worst Case |
| --------- | -------- | ---------- |
| Insert    | O(log n) | O(n)       |
| Search    | O(log n) | O(n)       |
| Delete    | O(log n) | O(n)       |

### Delete — 3 Cases

| Case         | Action                                                     |
| ------------ | ---------------------------------------------------------- |
| Leaf node    | Simply remove it                                           |
| One child    | Replace node with its child                                |
| Two children | Replace with inorder successor (smallest in right subtree) |

---

## 5. Balanced vs Unbalanced

**Unbalanced** — sorted insertion degrades BST to a linked list:

```
1 → 2 → 3 → 4 → 5   (O(n) search)
```

**Balanced** — height stays O(log n):

```
      3
     / \
    2   4
   /     \
  1       5
```
