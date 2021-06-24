/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  if (cost.length === 0) {
    return 0;
  }

  const dp = new Array(cost.length + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
  }

  return dp[cost.length];
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)