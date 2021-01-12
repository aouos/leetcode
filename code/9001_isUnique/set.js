/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let set = new Set();
  for (const char of astr) {
    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }
  return true;
};
console.log(isUnique('leetcode'));