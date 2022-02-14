/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const n = nums.length;
  const map = {};

  for (let i = 0; i < n; i++) {
    const diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }

  return [];
};
