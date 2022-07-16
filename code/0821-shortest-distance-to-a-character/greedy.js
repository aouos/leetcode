/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const len = s.length;
  const ans = new Array(len).fill(10001);

  for (let i = 0; i < len; i++) {
    if (s[i] === c) {
      ans[i] = 0;
    } else {
      if (i === 0) {
        continue;
      }
      ans[i] = ans[i - 1] + 1;
    }
  }

  for (let j = len - 1; j >= 0; j--) {
    if (j + 1 !== len) {
      ans[j] = Math.min(ans[j], ans[j + 1] + 1);
    }
  }

  return ans;
};
