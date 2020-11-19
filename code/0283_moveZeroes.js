/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  // 双指针,遇到非0值进行位置交换
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      continue;
    }
    let pointer = i + 1;
    while (pointer < nums.length) {
      if (nums[pointer] !== 0) {
        [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
        break;
      }
      pointer++;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));