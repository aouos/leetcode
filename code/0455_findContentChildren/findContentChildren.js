/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const gLen = g.length;
  const sLen = s.length;
  let ans = 0;
  for (let i = 0, j = 0; i < gLen && j < sLen; i++, j++) {
    while (g[i] > s[j] && j < sLen) {
      j++;
    }
    if (j < sLen) {
      ans++;
    }
  }
  return ans;
};
findContentChildren([1,2,3], [1,1])