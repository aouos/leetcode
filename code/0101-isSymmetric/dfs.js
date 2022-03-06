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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let pl = root.left;
  let pr = root.right;

  const dfs = (pl, pr) => {
    if (!pl && !pr) {
      return true;
    }
    if (pl && pr && pl.val === pr.val) {
      const rl = dfs(pl.left, pr.right);
      const rr = dfs(pl.right, pr.left);

      if (rl && rr) {
        return true;
      }
    }
    return false;
  };

  const result = dfs(pl, pr);

  return result;
};
