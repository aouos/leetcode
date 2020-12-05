/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let ans = 0;
  if (root === null) {
    return ans;
  }
  let currNode = [root];
  while (currNode.length) {
    for (let i = 0; i < currNode.length; i++) {
      let node = currNode.shift();
      ans++;
      if (node.left) {
        currNode.push(node.left);
      }
      if (node.right) {
        currNode.push(node.right);
      }
    }
  }
  return ans;
};