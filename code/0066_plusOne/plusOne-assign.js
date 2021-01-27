/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 如果当前值为9,赋值为0,不为9,加1返回
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  // 数组内全部为 9 的情况
  digits.unshift(1);
  return digits;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)