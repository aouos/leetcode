/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const ans = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }

  return ans;
};
