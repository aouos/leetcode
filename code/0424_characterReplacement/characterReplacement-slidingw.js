/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0, right = 0, maxn = 0;
  // 定义字符集数组
  const sum = new Array(26).fill(0);
  while (right < s.length) {
    // 右指针移动一次,计算当前字符的个数
    sum[s[right].charCodeAt() - 'A'.charCodeAt()]++;
    // 记录历史中出现最多的字符
    maxn = Math.max(maxn, sum[s[right].charCodeAt() - 'A'.charCodeAt()]);
    // 如果滑动窗口减去最多字符数加1大于k,无法满足替换条件
    if (right - left - maxn + 1 > k) {
      // 将left指针左移动缩小窗口,并将lefe指向的字符数减1
      sum[s[left].charCodeAt() - 'A'.charCodeAt()]--;
      left++;
    }
    right++;
  }
  // 返回窗口的大小
  return right - left;
};

// 时间复杂度：O(n)
// 空间复杂度：O(∣Σ∣)