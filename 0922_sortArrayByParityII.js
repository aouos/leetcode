/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = [], even = [], res = [];
  for (const item of A) {
    if (item & 1) {
      odd.push(item);
    } else {
      even.push(item);
    }
  }
  for (let j = 0; j < A.length / 2; j++) {
    res.push(even[j]);
    res.push(odd[j]);
  }
  return res;
};