/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  let hayslen = haystack.length;
  let needlen = needle.length;

  if (haystack === '' || hayslen < needlen) {
    return -1;
  }

  for (let i = 0; i <= hayslen - needlen; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needlen) === needle) {
        return i;
      }
    }
    if (i === hayslen - needlen) {
      return -1;
    }
  }
};