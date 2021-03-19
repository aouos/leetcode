/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
  if (amount === 0) return 1;
  const dp = [1].concat(new Array(amount).fill(0));

  for (let c = 0; c < coins.length; c++) {
    for (let i = 1; i <= amount; i++) {
      if (i - coins[c] >= 0) {
        dp[i] = dp[i] + dp[i - coins[c]];
      }
    }
  }

  return dp[dp.length - 1];
};

// 时间复杂度 O(M*N) N为amount长度，M为coins个数
// 空间复杂度 O(N) N为amount长度