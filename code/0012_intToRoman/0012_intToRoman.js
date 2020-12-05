/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let res = '';
  for (let i = 0; i <= nums.length; i++) {
    while (num >= nums[i]) {
      num -= nums[i];
      res += values[i];
    }
  }
  return res;
};