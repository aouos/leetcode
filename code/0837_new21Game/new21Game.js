/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */

var new21Game = function (n, k, maxPts) {
  let dp = new Array(k + maxPts).fill(0);
  let sum = 0;

  for (let i = k; i < k + maxPts; i++) {
    if (i <= n) {
      dp[i] = 1;
    }
    sum += dp[i];
  }

  for (let i = k - 1; i >= 0; i--) {
    dp[i] = sum / maxPts;
    sum -= dp[i + maxPts];
    sum += dp[i];
  }

  return dp[0];
};

// 时间复杂度：O(k + maxPts)
// 空间复杂度：O(k + maxPts)