/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = true, dec = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      inc = false;
    }
    if (A[i] < A[i + 1]) {
      dec = false;
    }
  }

  return inc || dec;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)