/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let ans = [];
  const n = num.length;

  for (let i = n - 1; i >= 0 || k > 0; i--) {
    i >= 0 && (k += num[i]);
    ans.push(k % 10);
    k = Math.floor(k / 10);
  }

  return ans.reverse();
};
