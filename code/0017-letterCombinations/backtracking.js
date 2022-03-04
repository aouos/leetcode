/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;

  if (len === 0) {
    return [];
  }

  const ans = [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  function dfs(str, idx) {
    if (idx === len) {
      ans.push(str);
      return;
    }
    for (const item of map[digits[idx]]) {
      dfs(str + item, idx + 1);
    }
  }

  dfs('', 0);

  return ans;
};
