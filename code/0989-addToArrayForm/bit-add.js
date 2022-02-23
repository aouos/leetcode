/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let ans = [];
  const n = num.length;

  for (let i = n - 1; i >= 0; i--) {
    const sum = num[i] + (k % 10);

    ans.push(sum % 10);
    k = Math.floor(k / 10) + Math.floor(sum / 10);
  }

  while (k) {
    ans.push(k % 10);
    k = Math.floor(k / 10);
  }

  return ans.reverse();
};
