/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let len = nums.length;
  if (len < 2) {
    return len;
  }
  // 声明两个长度相同的数列组,up和down
  // up记录上升摆动数列
  // down记录下降摆动数列
  const up = new Array(len).fill(0);
  const down = new Array(len).fill(0);
  up[0] = down[0] = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1;
      up[i] = up[i - 1];
    } else {
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }
  }
  return Math.max(up[len - 1], down[len - 1]);
};