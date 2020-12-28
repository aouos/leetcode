/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let ans = '';
  const map = new Map();
  for (const key in s) {
    if (!map.has(s[key])) {
      map.set(s[key], 1);
    } else {
      map.set(s[key], map.get(s[key]) + 1);
    }
  }
  let newArr = Array.from(map).sort((a, b) => {
    return b[1] - a[1];
  })
  for (let i = 0; i < newArr.length; i++) {
    while (newArr[i][1] > 0) {
      ans += newArr[i][0];
      newArr[i][1]--;
    }
  }
  return ans;
};