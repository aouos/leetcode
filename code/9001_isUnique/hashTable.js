/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let map = new Map();
  for (let i = 0; i < astr.length; i++) {
    if (!map.has(astr[i])) {
      map.set(astr[i], true);
    } else {
      return false;
    }
  }
  return true;
};
console.log(isUnique('leetcode'));