/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length;
  const res = [];

  function backtracking(idx, arr) {
    if (idx === len) {
      res.push(arr.slice());
      return;
    }
    arr.push(nums[idx]);
    backtracking(idx + 1, arr);
    arr.pop();
    backtracking(idx + 1, arr);
  }

  backtracking(0, []);

  return res;
};
