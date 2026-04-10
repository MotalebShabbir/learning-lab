import { TreeNode, myTree } from "./binary-tree.ts";

function postorder(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;

  postorder(node.left, result); // L
  postorder(node.right, result); // R
  result.push(node.value); //
  return result;
}
console.log(postorder(myTree));
