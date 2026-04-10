// Create this tree in code — manually, no class needed yet
//
//       10
//      /  \
//     5    15
//    / \     \
//   3   7     20

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export const myTree: TreeNode = new TreeNode(10);
myTree.left = new TreeNode(5);
myTree.right = new TreeNode(15);
myTree.left.left = new TreeNode(3);
myTree.left.right = new TreeNode(7);
myTree.right.right = new TreeNode(20);
