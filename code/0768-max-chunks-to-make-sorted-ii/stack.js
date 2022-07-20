/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const len = arr.length;
  const stack = [];

  for (let i = 0; i < len; i++) {
    if (!stack.length || stack[stack.length - 1] <= arr[i]) {
      stack.push(arr[i]);
    } else {
      const temp = stack.pop();
      while (stack.length && stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      stack.push(temp);
    }
  }

  return stack.length;
};
