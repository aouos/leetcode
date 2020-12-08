/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  if (!s) {
    return ans;
  }
  // 默认push进去-1,如果刚好完全有效,i + 1正好是长度
  let stack = [-1];
  for (let i = 0; i < s.length; i++) {
    // 如果为左括号入栈
    if (s[i] === '(') {
      stack.push(i);
    } else {
      // 右括号出栈
      stack.pop();
      // 判断stack是否为空
      if (stack.length) {
        // 如果栈不为空计算当前i到stack最后一个值的长度
        const curLen = i - stack[stack.length - 1];
        // 与当前值对比找最大值
        ans = Math.max(ans, curLen);
      } else {
        // 如果为空则推入栈
        stack.push(i);
      }
    }
  }
  return ans;
};