/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const ans = [];
  for (let i = A.length - 1; i >= 0 || K > 0; i--) {
    if (i >= 0) {
      K = A[i] + K;
    }
    ans.push(K % 10);
    K = Math.floor(K / 10);
  }
  return ans.reverse();
};
console.log(addToArrayForm([9, 9, 9, 9], 1));