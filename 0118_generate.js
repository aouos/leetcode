/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rows = [];
  if (numRows == 0) return rows;
  rows[0] = [1];
  for (let i = 1; i < numRows; i++) {
    rows[i] = [1];
    if (i >= 2) {
      for (let j = 1; j < i; j++) {
        rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
      }
    }
    rows[i].push(1);
  }
  return rows;
};