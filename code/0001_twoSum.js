/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 11, 15, 7], target = 9;

var twoSum = function (nums, target) {
  // 构建一个哈希表
  const map = new Map();
  // 遍历数组nums
  for (let i = 0; i < nums.length; i++) {
    // 得到当前值与target的差，在map中进行查找
    let diff = target - nums[i];
    if (map.has(diff)) {
      // 找到值后返回坐标
      return [map.get(diff), i];
    }
    // 将当前值的值与对应索引存入map
    map.set(nums[i], i);
  }
};

console.log(twoSum(nums, target));