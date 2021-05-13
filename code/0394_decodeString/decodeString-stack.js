/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    // 判断是否为 ], 不为 ] 直接入栈
    if (char === ']') {
      let repeatStr = ''; // 重复字符串统计
      while (stack[stack.length - 1] !== '[') {
        repeatStr = stack.pop() + repeatStr;
      }
      // 删除 [ 
      stack.pop();
      let repeatNum = ''; // 重复次数统计
      while (stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9') {
        repeatNum = stack.pop() + repeatNum;
      }
      // 根据字符串和次数计算结果
      repeatStr = repeatStr.repeat(parseInt(repeatNum));
      // 结果推入栈
      stack.push(repeatStr);
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};