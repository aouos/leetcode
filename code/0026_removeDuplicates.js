/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      continue;
    }
    let p = i + 1;
    while (p < nums.length) {
      if (nums[i] < nums[p]) {
        nums[i + 1] = nums[p];
        break;
      }
      p++;
    }
    if (p === nums.length) {
      len = nums.length - 1 - i;
      break;
    }
  }
  while (len) {
    nums.pop();
    len--;
  }
  return nums;
};

console.log(removeDuplicates(nums));