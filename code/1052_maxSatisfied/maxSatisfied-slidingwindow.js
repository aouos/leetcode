/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let total = 0;
  // 求出满意的总和
  for (let i = 0; i < customers.length; i++) {
    if (!grumpy[i]) {
      total += customers[i];
    }
  }
  let sum = 0;
  // 先求出前X个的情况
  for (let i = 0; i < X; i++) {
    sum += customers[i] * grumpy[i];
  }
  let maxSum = sum;
  // 以X为窗口大小移动，加入当前值并移除前索引为i-X的值
  for (let i = X; i < customers.length; i++) {
    sum = sum + customers[i] * grumpy[i] - customers[i - X] * grumpy[i - X];
    // 求出最大值
    maxSum = Math.max(sum, maxSum);
  }
  return total + maxSum;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)