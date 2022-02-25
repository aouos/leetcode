/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var left_bound = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (nums[mid] === target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (l >= nums.length || nums[l] !== target) {
    return -1;
  }

  return l;
};

var right_bound = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (nums[mid] === target) {
      l = mid + 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (r < 0 || nums[r] !== target) {
    return -1;
  }

  return r;
};

var searchRange = function (nums, target) {
  const ans = [left_bound(nums, target), right_bound(nums, target)];
  return ans;
};
