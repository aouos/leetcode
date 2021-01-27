/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 构建hashTable
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    // 判断map是否存在差值
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    // 不存在时存入当前元素和索引
    map.set(nums[i], i);
  }
  return [];
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)