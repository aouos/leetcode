/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const nums = [1, 1, 3, 3, 3, 2, 4, 1, 2, 2, 3, 3], k = 2;

var topKFrequent = function (nums, k) {
  let ans = [];
  // 创建一个哈希表
  let map = new Map();
  nums.map(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  })
  Array.from(map).sort((pre,next) => next[1] - pre[1]).slice(0,k).map(a => ans.push(a[0]));
  return ans;
};

console.log(topKFrequent(nums, k));