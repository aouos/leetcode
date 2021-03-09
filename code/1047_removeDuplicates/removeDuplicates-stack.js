/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join('');
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)