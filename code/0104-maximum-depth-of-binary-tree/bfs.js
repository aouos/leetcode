/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const temp = queue.shift();
      temp.left && queue.push(temp.left);
      temp.right && queue.push(temp.right);
    }
    depth++;
  }

  return depth;
};
