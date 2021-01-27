/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  let p0 = 0, p2 = nums.length - 1;
  for (let i = 0; i <= p2; i++) {
    // 如果当前值为0与p0位置进行交换
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      p0++;
    } else if (nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
      // 与p2交换后需要重新考虑i处值,存在交换后还是2的情况
      i--;
    }
  }
  return nums;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)