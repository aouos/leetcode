/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let mark = 0;
  for (const char of astr) {
    const len = char.charCodeAt() - 97;
    if ((mark & (1 << len)) !== 0) {
      return false;
    }
    mark = mark | (1 << len);
  }
  return true;
};
console.log(isUnique('abac'));