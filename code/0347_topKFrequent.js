/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const nums = [1, 1, 3, 3, 3, 2, 4, 1, 2, 2, 3, 3], k = 2;

var topKFrequent = function (nums, k) {
  // 创建一个哈希表
  let map = new Map();
  // 遍历数组存入值和计数
  for (let idx in nums) {
    map[nums[idx]] = map[nums[idx]] ? map[nums[idx]] + 1 : 1;
  }
  // 遍历map进行排序
  return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k);
};

console.log(topKFrequent(nums, k));