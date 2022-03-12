/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0;
  let count = 1;
  const len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(count, ans);
  }

  return ans;
};
