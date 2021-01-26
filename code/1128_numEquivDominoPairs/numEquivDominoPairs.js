/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let ans = 0;
  let arr = new Array(100).fill(0);
  for (const item of dominoes) {
    const idx = item[0] < item[1] ? item[0] * 10 + item[1] : item[1] * 10 + item[0];
    ans += arr[idx];
    arr[idx]++;
  }
  return arr;
};