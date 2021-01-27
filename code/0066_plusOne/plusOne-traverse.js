/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 当前值与1相加求模后赋值给digits[i]
    digits[i] = (digits[i] + 1) % 10;
    // 如果不为0则直接返回
    if (digits[i] !== 0) {
      return digits;
    }
  }
  // 数组内全部为 9 的情况
  return [1, ...digits];
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)