/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
const nums = [1, 2, 4, 5, -6, 3, -9, 6, -4, 6, 1, -3], k = 3;

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

console.log(maxSlidingWindow(nums, k));