/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const len = num.length;
  const stack = [];

  for (let i = len - 1; i >= 0 || k > 0; i--) {
    k = k + (num[i] || 0);
    stack.push(k % 10);
    k = Math.floor(k / 10);
  }

  return stack.reverse();
};
