/**
 * @param {number} n
 * @return {number}
 */
// 解题思路,动态规划
var fib = function (n) {
  // 小于2直接返回n的值
  // 0返回0, 1返回1
  if (n < 2) {
    return n;
  }
  // 定义三个变量, 结果, 前一个值, 当前值
  let ans = 0;
  let pre = 0;
  let cur = 1;
  for (let i = 1; i < n; i++) {
    // 结果等于前一个值加上当前值
    ans = pre + cur;
    // 将当前值赋给前一个值
    pre = cur;
    // 将计算结果赋值给下一次循环的cur
    cur = ans;
  }
  return ans;
};