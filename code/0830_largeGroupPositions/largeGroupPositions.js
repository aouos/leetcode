/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let ans = [];
  let start = 0, count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count >= 3) {
        ans.push([start, i]);
      }
      count = 1;
      start = i + 1;
    }
  }
  return ans;
};