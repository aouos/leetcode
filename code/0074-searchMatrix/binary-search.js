/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchFirstColumn(matrix, target) {
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (matrix[mid][0] === target) {
      return mid;
    } else if (matrix[mid][0] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}

function searchIndexRow(matrix, index, target) {
  let l = 0;
  let r = matrix[index].length;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (matrix[index][mid] === target) {
      return true;
    } else if (matrix[index][mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
}

var searchMatrix = function (matrix, target) {
  const index = searchFirstColumn(matrix, target);

  if (index === -1) {
    return false;
  }

  return searchIndexRow(matrix, index, target);
};
