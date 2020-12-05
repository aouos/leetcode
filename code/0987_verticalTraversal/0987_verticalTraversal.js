/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  if (!root) {
    return [];
  }
  let map = {};
  function dfs(node, x, y) {
    map[node.val] = [node.val, x, y];
    if (node.left) {
      dfs(node.left, x - 1, y - 1);
    }
    if (node.right) {
      dfs(node.right, x + 1, y - 1);
    }
  }
  dfs(root, 0, 0);
  let newArr = Object.values(map);
  let ans = [];
  let p = 0;
  let sta = false;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i][1] > newArr[j][1]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      if (newArr[i][1] === newArr[j][1] && newArr[i][2] === newArr[j][2] && newArr[i][0] > newArr[j][0]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      if (newArr[i][1] === newArr[j][1] && newArr[i][2] < newArr[j][2]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
    if(newArr[i - 1] !== undefined) {
      sta = newArr[i][1] === newArr[i - 1][1] ? true : false;
    }
    if (!sta) {
      ans[p] = [newArr[i][0]];
      p++;
    }else {
      ans[p -1].push(newArr[i][0])
    }
  }
  return ans;
};