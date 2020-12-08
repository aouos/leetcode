/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length;
  // 如果是0直接返回true
  if (len === 0) {
    return true;
  }
  // 如果为奇数直接返回false
  if ((len & 1) === 1) {
    return false;
  }
  let stack = [];
  // 定义一个map
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (let i = 0; i < len; i++) {
    // 如果当前栈长度大于一半s长度一定不是有效的
    if (stack.length > len / 2) {
      return false;
    }
    // 不存在此值入栈(找出属于左边的括号)
    if (!map[s[i]]) {
      stack.push(s[i]);
    } else {
      // 存在时出栈进行对比
      const str = stack.pop();
      if (str !== map[s[i]]) {
        return false;
      }
    }
  }
  // 判断stack长度是否为空
  return stack.length === 0;
};