/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let num = x ^ y;
  let ans = 0;

  while (num) {
    num &= num - 1;
    ans++;
  }

  return ans;
};
