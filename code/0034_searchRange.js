/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [1, 2, 2, 2, 4, 5, 6, 7, 8], target = 0;
const nums = [0, 0, 0, 1, 2, 3], target = 0;

var searchRange = function (nums, target) {
  let ans = [-1, -1]
  if (nums.length === 0) {
    return ans;
  }
  let l = 0; r = nums.length - 1;
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else {
      let i = mid, j = mid;
      while (i >= 0) {
        if (nums[i - 1] === undefined || nums[i - 1] < target) {
          ans[0] = i;
          break;
        }
        i--;
      }
      while (j <= nums.length - 1) {
        if (nums[j + 1] === undefined || nums[j + 1] > target) {
          ans[1] = j;
          break;
        }
        j++;
      }
      return ans;
    }
  }
  return ans;
};
console.log(searchRange(nums, target));