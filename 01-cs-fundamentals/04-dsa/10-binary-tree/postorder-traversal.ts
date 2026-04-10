import { TreeNode, myTree } from "./binary-tree.ts";

function inorder(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;

  inorder(node.left, result); // L
  inorder(node.right, result); // R
  result.push(node.value); //
  return result;
}
console.log(inorder(myTree));
