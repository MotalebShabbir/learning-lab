import { TreeNode, myTree } from "./binary-tree.ts";

function preorder(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;
  result.push(node.value); //
  preorder(node.left, result); // L
  preorder(node.right, result); // R
  return result;
}
console.log(preorder(myTree));
