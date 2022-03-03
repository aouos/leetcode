/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};

  for (const i of nums) {
    (map[i] = map[i] + 1) || (map[i] = 1);
  }

  for (const [k, v] of Object.entries(map)) {
    if (v === 1) {
      return k;
    }
  }
};
