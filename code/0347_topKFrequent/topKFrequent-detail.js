/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }
  const arr = Array.from(map);
  arr.sort((a, b) => {
    return b[1] - a[1];
  })
  let i = 0, ans = [];
  while (i < k) {
    ans.push(arr[i][0]);
    i++;
  }
  return ans;
};