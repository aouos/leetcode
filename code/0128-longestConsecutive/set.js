/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0;
  const set = new Set(nums);
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (!set.has(nums[i] - 1)) {
      let cur = nums[i];
      let count = 1;
      while (set.has(cur + 1)) {
        cur++;
        count++;
      }
      ans = Math.max(count, ans);
    }
  }

  return ans;
};
