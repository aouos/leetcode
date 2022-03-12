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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = [];

  const dfs = (node) => {
    if (!node) {
      return;
    }
    list.push(node);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  const len = list.length;

  for (let i = 1; i < len; i++) {
    const prev = list[i - 1];
    const cur = list[i];
    prev.left = null;
    prev.right = cur;
  }
};
