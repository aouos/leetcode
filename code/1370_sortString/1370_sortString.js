/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let map = new Map();
  let max = 0;
  let ans = '';
  for (let i in s) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    max = Math.max(max, map[s[i]]);
  }
  let list = Object.keys(map).sort();
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < list.length; j++) {
      if (map[list[j]] !== 0) {
        ans += [list[j]];
        map[list[j]]--;
      }
    }
    list.reverse();
  }
  return ans;
};