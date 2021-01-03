/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if ((nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) || !nums[mid + 1] || (!nums[mid - 1] && nums[mid] > nums[mid + 1])) {
      return mid;
    }
    if (nums[mid + 1] > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
console.log(findPeakElement([1, 2, 3, 4]));