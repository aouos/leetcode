/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for(const a of nums) {
    res ^= a;
  }
  return res;
};