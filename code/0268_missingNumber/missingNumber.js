/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let ans = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i] ^ i;
  }
  return ans;
};