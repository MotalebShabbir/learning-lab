import { TreeNode, myTree } from "./binary-tree.ts";

function inorder(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;
  inorder(node.left, result);
  result.push(node.value);
  inorder(node.right, result);
  return result;
}
console.log(inorder(myTree));
