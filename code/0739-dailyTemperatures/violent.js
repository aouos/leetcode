/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const ans = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let j = i + 1;
    while (j < len) {
      if (temperatures[j] > temperatures[i]) {
        ans[i] = j - i;
        break;
      }
      j++;
    }
  }

  return ans;
};
