/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  let total = 0;
  const ans = [];
  for (let i = 0; i < A.length; i++) {
    total = (total << 2 + A[i]) % 10;
    ans.push(total === 0 || total === 5);
  }
  return ans;
};