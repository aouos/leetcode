/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      let map = new Map();
      let len = 0;
      for (let j = i; j < s.length; j++) {
        if (!map.has(s[j])) {
          map.set(s[j], 1);
          len++;
        } else {
          break;
        }
      }
      ans = Math.max(ans, len);
    }
  }
  return ans;
};