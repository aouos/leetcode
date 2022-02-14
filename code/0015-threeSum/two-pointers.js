/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  const result = [];

  if (n < 3) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0 || nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return result;
};
