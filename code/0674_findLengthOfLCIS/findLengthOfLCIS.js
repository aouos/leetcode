/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      r++;
    } else {
      ans = Math.max(ans, r - l + 1);
      l = r = i + 1;
    }
  }
  return ans;
};