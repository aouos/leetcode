/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) {
    return stones[0];
  }
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    let popf = stones.pop();
    let pops = stones.pop();
    if (popf !== pops) {
      let diff = popf - pops;
      stones.push(diff);
      stones.sort((a, b) => a - b);
    }
  }
  if (stones.length !== 0) {
    return stones[0];
  } else {
    return 0;
  }
};