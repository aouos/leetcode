/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  // 对饼干数和胃口数排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const gLen = g.length;
  const sLen = s.length;
  let ans = 0;

  for (let i = 0, j = 0; i < gLen && j < sLen; i++, j++) {
    // 找出饼干大于胃口的值
    while (g[i] > s[j] && j < sLen) {
      j++;
    }
    if (j < sLen) {
      ans++;
    }
  }

  return ans;
};

// 时间复杂度 O(NlogN)
// 空间复杂度 O(1)