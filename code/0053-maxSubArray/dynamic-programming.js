/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  const dp = [...nums];
  let ans = dp[0];

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ans = Math.max(dp[i], ans);
  }

  return ans;
};
