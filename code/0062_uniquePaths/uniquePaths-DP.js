/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  const dp = new Array(m);

  for (let i = 0; i < m; i++) {
    const _arr = new Array(n).fill(1);
    dp[i] = _arr;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

// 时间复杂度 O(M*N)
// 空间复杂度 O(M*N)