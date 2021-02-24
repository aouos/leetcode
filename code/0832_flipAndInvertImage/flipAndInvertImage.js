/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    let m = 0, n = A.length - 1;
    while (m < n) {
      [A[i][m], A[i][n]] = [A[i][n], A[i][m]];
      m++;
      n--;
    }
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1;
    }
  }
  return A;
};

// 时间复杂度 O(N²)
// 空间复杂度 O(1)