/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;

  for (const i of nums) {
    ans ^= i;
  }

  return ans;
};
