/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const temp = [];
  function dfs(sum, start) {
    if (sum === target) {
      return ans.push(temp.slice());
    }
    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (sum + num > target) {
        continue;
      };
      temp.push(num);
      dfs(sum + num, i);
      temp.pop();
    }
  }
  dfs(0, 0);
  return ans;
};