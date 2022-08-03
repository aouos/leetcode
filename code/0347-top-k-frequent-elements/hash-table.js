/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  for (const num of nums) {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const ret = [];
  for (let i = 0; i < k; i++) {
    ret.push(arr[i][0]);
  }

  return ret;
};
