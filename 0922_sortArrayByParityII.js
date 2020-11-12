/**
 * @param {number[]} A
 * @return {number[]}
 */
// const A = [4, 1, 1, 2, 1, 0];
// const A = [5, 7, 4, 2];
// const A = [4, 2, 5, 7];
const A = [3, 1, 4, 2];
var sortArrayByParityII = function (A) {
  let i = 0;
  for (i; i < A.length; i += 2) {
    if (A[i] & 1) {
      let j = 1;
      while (j < A.length) {
        if (!(A[j] & 1)) {
          [A[i], A[j]] = [A[j], A[i]];
        }
        j += 2;
      }
    }
  }
  return A;
};
console.log(sortArrayByParityII(A));