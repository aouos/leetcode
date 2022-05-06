/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const len = candidates.length;

  function backtracking(idx, sum, arr) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      ans.push(arr.slice());
      return;
    }

    for (let i = idx; i < len; i++) {
      arr.push(candidates[i]);
      sum += candidates[i];
      backtracking(i, sum, arr);

      sum -= candidates[i];
      arr.pop();
    }
  }

  backtracking(0, 0, []);

  return ans;
};
