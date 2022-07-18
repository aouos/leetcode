/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = [];
  const strStack = [];
  const len = s.length;
  let num = 0;
  let str = '';

  for (let i = 0; i < len; i++) {
    if (!isNaN(s[i])) {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '[') {
      numStack.push(num);
      strStack.push(str);
      num = 0;
      str = '';
    } else if (s[i] === ']') {
      const times = numStack.pop();
      str = strStack.pop() + str.repeat(times);
    } else {
      str += s[i];
    }
  }

  return str;
};
