/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  const stack = [];

  if ((len & 1) === 1) {
    return false;
  }

  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < len; i++) {
    if (stack.length > len / 2) {
      return false;
    }

    if (!map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== map[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
