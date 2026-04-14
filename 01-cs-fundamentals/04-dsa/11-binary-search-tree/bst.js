import { TreeNode } from "../10-binary-tree/binary-tree.js";

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (current.value > value) {
                if (current.left === null) {
                    current.left = node;
                    return;
                }
                current = current.left;
            } else if (current.value < value) {
                if (current.right === null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }
    search(value) {
        let current = this.root;
        if (current === null) return false;
        while (true) {
            if (current === null) return false;
            else if (current.value === value) return true;
            else if (current.value > value) current = current.left;
            else if (current.value < value) current = current.right;
        }
    }
    delete(value) {
        let current = this.root;
        while (true) {
            if (current === null) {
                console.log(`${value} not found`);
                return;
            } else if (current.value === value) {
                if (!current.left && !current.right) {
                    current = null;
                } else if (current.left && current.right);
                else if (current.left) {
                    current = current.left;
                } else if (current.right) {
                    current = current.right;
                }
                console.log(`${value} has deleted`);
                return;
            } else if (current.value > value) current = current.left;
            else current = current.right;
        }
    }
}
const a = new BST();
a.insert(10);
a.insert(3);
a.insert(7);
a.insert(15);
//a.insert(20);
//a.insert(12);

a.delete(15);
console.log(a);
