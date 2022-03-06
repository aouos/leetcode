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
  const bfs = (pl, pr) => {
    const queue = [pl, pr];

    while (queue.length) {
      const sl = queue.shift();
      const sr = queue.shift();

      if (!sl && !sr) {
        continue;
      }

      if ((!sl || !sr) || (sl.val !== sr.val)) {
        return false;
      }

      queue.push(sl.left, sr.right, sl.right, sr.left);
    }

    return true;
  };

  const result = bfs(root, root);

  return result;
};
