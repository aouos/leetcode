/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minLen = s.length + 1;
  let start = s.length;
  let map = new Map();

  for (const c of t) {
    map[c] ? map[c]++ : map[c] = 1;
  }

  let need = Object.keys(map).length;
  let l = 0, r = 0;
  while (r < s.length) {
    if (map[s[r]] !== undefined) {
      map[s[r]]--;
    }
    if (map[s[r]] === 0) {
      need--;
    }
    while (need === 0) {
      if (r - l + 1 < minLen) {
        minLen = Math.min(minLen, r - l + 1);
        start = l;
      }
      if (map[s[l]] !== undefined) {
        map[s[l]]++;
      }
      if (map[s[l]] > 0) {
        need++;
      }
      l++;
    }
    r++;
  }
  if (start === s.length) {
    return '';
  }
  return s.substring(start, start + minLen);
};