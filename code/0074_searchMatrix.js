/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], target = 3;
const matrix = [[1,3],[5,8],[13,17],[28,45],[67,78]], target = 3;

var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let row = 0;
  let l = 0, r = matrix.length - 1;
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (target >= matrix[mid][0]) {
      if (target === matrix[mid][0]) {
        return true;
      }
      row = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  let rowArr = matrix[row];
  let i = 0, j = rowArr.length - 1;
  while (i <= j) {
    let mid = ((j - i) >> 1) + i;
    if (target >= rowArr[mid]) {
      if (target === rowArr[mid]) {
        return true;
      }
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return false;
};

console.log(searchMatrix(matrix, target));