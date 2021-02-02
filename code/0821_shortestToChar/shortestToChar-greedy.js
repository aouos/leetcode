/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let ans = new Array(S.length);
  // 从左到右遍历查找一遍
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      ans[i] = 0;
      continue;
    }
    if (ans[i - 1] !== void 0) {
      ans[i] = ans[i - 1] + 1;
    }
  }
  // 从右到左遍历查找一边,赋给小值
  for (let i = S.length - 1; i >= 0; i--) {
    if (ans[i] === void 0 || ans[i + 1] + 1 < ans[i]) {
      ans[i] = ans[i + 1] + 1;
    }
  }
  return ans;
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)