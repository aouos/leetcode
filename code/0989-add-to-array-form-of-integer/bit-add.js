/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const len = num.length;

  for (let i = len - 1; i >= 0; i--) {
    const sum = (k % 10) + num[i];
    num[i] = sum % 10;
    k = Math.floor(k / 10) + Math.floor(sum / 10);
  }

  while (k > 0) {
    num.unshift(k % 10);
    k = Math.floor(k / 10);
  }

  return num;
};
