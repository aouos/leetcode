/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

const num = "9", k = 1;

var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    const n = num[i];
    while (k > 0 && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }
    if (n != '0' || stack.length != 0) {
      stack.push(n);
    }
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  return stack.length == 0 ? "0" : stack.join('');
};

console.log(removeKdigits(num, k));