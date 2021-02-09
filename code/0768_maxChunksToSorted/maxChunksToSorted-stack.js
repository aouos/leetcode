/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  // 定义辅助栈
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    // 如果当前栈为空或者大于栈顶元素，入栈
    if (stack.length === 0 || stack[stack.length - 1] <= arr[i]) {
      stack.push(arr[i]);
    } else {
      // 获取栈顶元素(最大值)
      const temp = stack.pop();
      // 找到大于当前值的数，出栈
      while (stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      // 最大值入栈，分块完成
      stack.push(temp);
    }
  }
  return stack.length;
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)