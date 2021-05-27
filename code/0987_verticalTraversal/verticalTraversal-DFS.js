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

var verticalTraversal = function (root) {
  const map = {};

  function dfs(node, x = 0, y = 0) {
    if (!node) return;

    x in map || (map[x] = [])

    map[x].push([y, node.val]);

    dfs(node.left, x - 1, y - 1);
    dfs(node.right, x + 1, y - 1);
  }
  dfs(root);

  let sorted = Object.keys(map)
    .sort((a, b) => a - b)
    .map(key => map[key])

  sorted = sorted.map(g => {
    g.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    })

    return g.map(el => el[1]);
  })

  return sorted;
};

// 时间复杂度：O(NlogN)
// 空间复杂度：O(N)