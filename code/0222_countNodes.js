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

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

let root = new TreeNode(1, null, null);
root.left = new TreeNode(2, null, null);
root.right = new TreeNode(3, null, null);
root.left.left = new TreeNode(4, null, null);
root.left.right = new TreeNode(5, null, null);
root.right.left = new TreeNode(6, null, null);

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

console.log(countNodes(root));