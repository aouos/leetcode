/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 生成m * n的网格
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    // 使用1进行填充
    dp[i] = new Array(m).fill(1);
    // if (i === 0) {
    //   dp[i] = new Array(m).fill(1);
    // } else {
    //   dp[i] = new Array(m).fill(0);
    //   dp[i][0] = 1;
    // }
  }
  // 当前格子的值为走到上一个的路径数加上左边的路径数
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  // 饭hi最后一个格子的值即为结果
  return dp[n - 1][m - 1];
};