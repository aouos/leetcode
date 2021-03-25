/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0;
  while (n) {
    n = n & (n - 1);
    ans++;
  }
  return ans;
};

// 时间复杂度 O(logN)
// 空间复杂度 O(1)