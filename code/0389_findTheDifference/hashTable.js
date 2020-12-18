/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      if (map.get(t[j]) === 0) {
        ans += t[j];
        continue;
      }
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      ans += t[j];
    }
  }
  return ans;
};