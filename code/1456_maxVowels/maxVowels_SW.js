/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  const set = new Set();
  set.add('a');
  set.add('e');
  set.add('i');
  set.add('o');
  set.add('u');

  let res = 0;

  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      res++;
    }
  }

  let cur = res;
  for (let i = 1; i < s.length - k + 1; i++) {
    if (set.has(s[i - 1])) {
      cur--;
    }
    if (set.has(s[i + k - 1])) {
      cur++;
    }
    res = Math.max(res, cur);
  }

  return res;
};

// 时间复杂度 O(N)
// 空间复杂度 O(1)