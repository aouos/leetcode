/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (const key in s) {
    if (!map.has(s[key])) {
      map.set(s[key], [1, key]);
    } else {
      map.set(s[key] ,[map.get(s[key])[0] + 1, key]);
    }
  }
  let ans = -1;
  map.forEach(val => {
    if (ans !== -1) {
      return;
    }
    if (val[0] === 1 && ans === -1) {
      ans = val[1];
    }
  })
  return ans;
};
firstUniqChar('leetcode');