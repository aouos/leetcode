/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  function dfs(left, right, str) {
    if (str.length === 2 * n) {
      ans.push(str);
      return;
    }

    if (left > 0) {
      dfs(left - 1, right, str + '(');
    }
    if (right > left) {
      dfs(left, right - 1, str + ')');
    }
  }

  dfs(n, n, '');

  return ans;
};
