/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs) {
    return '';
  }

  const count = strs.length;
  let ans = strs[0];
  const length = ans.length;

  for (let i = 0; i < length; i++) {
    const c = ans[i];

    for (let j = 1; j < count; j++) {
      if (c !== strs[j][i] || strs[j].length === i) {
        return ans.substring(0, i);
      }
    }
  }

  return ans;
};
