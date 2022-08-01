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

  const dfs = function (node, x, y) {
    if (!node) {
      return;
    }
    if (x in map) {
      map[x].push([node.val, y]);
    } else {
      map[x] = [[node.val, y]];
    }
    node.left && dfs(node.left, x - 1, y - 1);
    node.right && dfs(node.right, x + 1, y - 1);
  };

  dfs(root, 0, 0);

  const arr = Object.entries(map)
    .sort((a, b) => a[0] - b[0])
    .map((item) => item[1]);

  const ret = arr.map((item) => {
    if (item.length > 1) {
      item.sort((a, b) => {
        if (a[1] !== b[1]) {
          return b[1] - a[1];
        } else {
          return a[0] - b[0];
        }
      });
    }
    return item.map((item) => item[0]);
  });

  return ret;
};
