/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  let right = 0;

  for (let i = 0; i < len; i++) {
    if (i <= right) {
      right = Math.max(right, i + nums[i]);
      if (right >= len - 1) {
        return true;
      }
    }
  }

  return false;
};
