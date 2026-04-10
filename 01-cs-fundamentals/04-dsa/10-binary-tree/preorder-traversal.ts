import { TreeNode, myTree } from "./binary-tree.ts";

function inorder(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;
  result.push(node.value); //
  inorder(node.left, result); // L
  inorder(node.right, result); // R
  return result;
}
console.log(inorder(myTree));
