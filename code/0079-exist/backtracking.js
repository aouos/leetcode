/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;

  const find = (i, j, idx) => {
    if (i < 0 || i >= row || j < 0 || j >= col) {
      return false;
    }
    const now = board[i][j];
    if (now !== word[idx]) {
      return false;
    }
    if (idx === word.length - 1) {
      return true;
    }
    board[i][j] = null;
    const ret =
      find(i + 1, j, idx + 1) ||
      find(i - 1, j, idx + 1) ||
      find(i, j + 1, idx + 1) ||
      find(i, j - 1, idx + 1);
    board[i][j] = now;
    return ret;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (find(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
