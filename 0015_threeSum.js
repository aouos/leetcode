/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => { return a - b });
  if (nums.length < 3) {
    return res;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    for (let x = i + 1, y = nums.length - 1; x < y;) {
      if (nums[i] + nums[x] + nums[y] < 0) {
        x++;
      } else if (nums[i] + nums[x] + nums[y] > 0) {
        y--;
      } else {
        if (nums[x] === nums[x - 1] && nums[y] === nums[y + 1]) {
          x++; y--;
          continue;
        }
        res.push([nums[i], nums[x], nums[y]]);
        x++; y--;
      }
    }
  }
  return res;
};