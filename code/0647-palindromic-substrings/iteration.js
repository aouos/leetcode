/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length;
  let ans = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      let l = i;
      let r = i + j;
      while (l >= 0 && r < len && s[l--] === s[r++]) {
        ans++;
      }
    }
  }

  return ans;
};
