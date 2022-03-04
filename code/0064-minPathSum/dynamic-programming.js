/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = [...grid];
  const m = dp.length;
  const n = dp[0].length;

  for (let i = 1; i < m; i++) {
    dp[i][0] += dp[i - 1][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] += dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] += Math.min(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[m - 1][n - 1];
};
