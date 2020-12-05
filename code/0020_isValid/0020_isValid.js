/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len === 0) {
    return true;
  }
  if (len % 2 === 1) {
    return false;
  }
  const map = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  const stack = []
  for (let i = 0; i <= len - 1; i++) {
    if (!map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (map[s[i]] !== stack.pop()) {
        return false;
      }
    }
    if (stack.length > len / 2) {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};