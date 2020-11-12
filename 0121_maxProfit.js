/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let pointer = 0;
  let max = 0;
  for (pointer; pointer < prices.length - 1; pointer++) {
    if (prices[pointer] > prices[pointer + 1]) {
      continue;
    }
    let i = pointer + 1;
    while (i < prices.length) {
      if (prices[pointer] < prices[i]) {
        max = Math.max(max, prices[i] - prices[pointer]);
      }
      i++;
    }
  }
  return max;
};