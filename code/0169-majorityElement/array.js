/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const l = nums.length;
  const t = l / 2;
  const a = {};

  for (let i = 0; i < l; i++) {
    if (a[nums[i]]) {
      a[nums[i]]++;
    } else {
      a[nums[i]] = 1;
    }
  }

  for (const k in a) {
    if (a[k] > t) {
      return parseInt(k);
    }
  }
};
