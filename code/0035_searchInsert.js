/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1, 3, 5, 6, 7, 8], target = 0;

var searchInsert = function (nums, target) {
  // 定义指,l指向最左端,r指向最右端
  let l = 0, r = nums.length - 1, ans = nums.length;
  // 当l<=r时执行循环
  while (l <= r) {
    // 中间下标使用位运算进行求值
    let mid = ((r - l) >> 1) + l;
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }
  return ans;
};

console.log(searchInsert(nums, target));