/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0, right = 0;
  while (right < nums.length) {
    if (right !== left && nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }

  return left + 1;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)