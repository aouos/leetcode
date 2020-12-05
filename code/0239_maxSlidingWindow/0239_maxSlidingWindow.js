/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ans = [];
  if (nums.length === 0) {
    return ans;
  }
  let slide = [];
  for (let i = 0; i < nums.length; i++) {
    if (slide.length && slide[0] <= i - k) {
      slide.shift();
    }
    const num = nums[i];
    while (slide.length && nums[slide[slide.length - 1]] < num) {
      slide.pop();
    }
    slide.push(i);
    if (i >= k - 1) {
      ans.push(nums[slide[0]]);
    }
  }
  return ans;
};