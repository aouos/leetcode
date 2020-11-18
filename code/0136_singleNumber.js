/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [4, 1, 2, 1, 2];
var singleNumber = function (nums) {
  let res = 0;
  for(const a of nums) {
    res ^= a;
  }
  return res;
};
console.log(singleNumber(nums));