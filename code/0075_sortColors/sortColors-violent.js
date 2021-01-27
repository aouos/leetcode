/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  // 通过两个指针双重遍历比对大小进行交换
  for (let l = 0; l < nums.length; l++) {
    for (let r = l + 1; r < nums.length; r++) {
      if (nums[l] > nums[r]) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        // 如果交换后左边的值为0结束右指针查找
        if (nums[l] === 0) {
          break;
        }
      }
    }
  }
  return nums;
};

// 时间复杂度 O(N²)
// 空间复杂度 O(1)