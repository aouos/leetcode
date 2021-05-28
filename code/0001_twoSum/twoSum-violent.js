/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {

        return [i, j];
      }
    }
  }

  return [];
};

// 时间复杂度 O(N²)
// 空间复杂度 O(1)