/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length;
  let l = 0, r = len - 1, res = len;
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (target <= nums[mid]) {
      res = mid;
      r = mid - 1;
    }else {
      l = mid + 1;
    }
  }
  return res;
};