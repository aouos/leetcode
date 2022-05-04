/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = strs[0];

  function find(stra, strb) {
    const minl = Math.min(stra.length, strb.length);
    let p = 0;

    while (p < minl) {
      if (stra[p] !== strb[p]) {
        break;
      }
      p++;
    }

    return stra.substring(0, p);
  }

  for (let j = 1; j < strs.length; j++) {
    ans = find(ans, strs[j]);
  }

  return ans;
};
