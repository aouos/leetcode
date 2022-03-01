/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  const len = s.length;
  let ans = 0;
  let i = 0;

  for (let j = 0; j < len; j++) {
    if (map.has(s[j]) && i <= map.get(s[j])) {
      i = map.get(s[j]) + 1;
    } else {
      ans = Math.max(ans, j - i + 1);
    }
    map.set(s[j], j);
  }

  return ans;
};
