/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 特殊值情况
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  if (x < 10) return true;
  var m = x;
  var n = 0;
  while (n < m) {
    var s = m % 10;
    m = parseInt(m / 10);
    n = n * 10 + s;
  }
  if (m == n) {
    return true;
  }
  if (m < n && m == parseInt(n / 10)) {
    return true;
  }
  return false;
};