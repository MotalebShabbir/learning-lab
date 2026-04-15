class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
    let parent = this.root;
    while (true) {
      if (current === null) {
        return false;
      } else if (current.value === value) {
        if (!current.left && !current.right) /*no childern or leaf node*/ {
          if (current === this.root) this.root = null;
          else if (parent.right === current) {
            parent.right = null;
          } else if (parent.left === current) {
            parent.left = null;
          }
        } else if (current.left && !current.right) /*one child left only*/ {
          if (current === this.root) this.root = current.left;
          else if (parent.left === current) {
            parent.left = current.left;
          } else if (parent.right === current) {
            parent.right = current.left;
          }
        } else if (!current.left && current.right) /*one child right only*/ {
          if (current === this.root) this.root = current.right;
          else if (parent.left === current) {
            parent.left = current.right;
          } else if (parent.right === current) {
            parent.right = current.right;
          }
        } else /*two child*/ {
          let target = current;
          parent = current;
          current = current.right;
          while (current && current.left) {
            parent = current;
            current = current.left;
          }
          target.value = current.value;
          if (parent.left === current) parent.left = current.right;
          else parent.right = current.right;
        }
        return true;
      } else if (current.value > value) {
        parent = current;
        current = current.left;
      } else if (current.value < value) {
        parent = current;
        current = current.right;
      }
    }
  }
}
const a = new BST();
a.insert(10);
a.insert(3);
a.insert(7);
a.insert(15);
a.insert(20);
a.insert(12);

a.delete(10);
console.log(a);
