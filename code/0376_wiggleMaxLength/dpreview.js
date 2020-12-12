/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let len = nums.length;
  if (len < 2) {
    return len;
  }
  // 使用up和down变量保存上一次的值
  // 空间复杂度压缩到O(1)
  let up = down = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
};