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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const ans = [];

  const bfs = (node) => {
    const queue = [node];

    while (queue.length) {
      const temp = [];
      let n = queue.length;

      while (n > 0) {
        const t = queue.shift();

        if (t) {
          temp.push(t.val);
          queue.push(t.left, t.right);
        }
        n--;
      }

      temp.length && ans.push(temp);
    }
  };

  bfs(root);

  return ans;
};
