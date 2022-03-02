/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 1;
  let next = 1;

  for (let i = 2; i <= n; i++) {
    next = prev + next;
    prev = next - prev;
  }

  return next;
};
