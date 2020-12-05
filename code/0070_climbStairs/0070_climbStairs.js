/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1, 1];
  let i = 1;
  while(i < n) {
    arr.push(arr[i] + arr[i - 1]);
    i++;
  }
  return arr[i];
};