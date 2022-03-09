/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const len = nums.length;
  const map = new Map();
  const ans = [];

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const sotrArr = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let j = 0; j < k; j++) {
    ans.push(sotrArr[j][0]);
  }

  return ans;
};
