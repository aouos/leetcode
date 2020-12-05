/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let len = gas.length;
  let i = 0;
  while (i < len) {
    let _gas = 0, _cost = 0;
    let j = 0;
    while (j < len) {
      let p = (i + j) % len;
      _gas += gas[p];
      _cost += cost[p];
      if (_gas < _cost) {
        break;
      }
      j++;
    }
    if (j === len) {
      return i;
    } else {
      i = i + j + 1;
    }
  }
  return -1;
};