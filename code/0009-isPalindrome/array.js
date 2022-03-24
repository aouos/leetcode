/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const s = x.toString().split('');
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }

  return true;
};
