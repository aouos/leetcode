/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reverseX = 0;

  while (x > reverseX) {
    reverseX = reverseX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverseX === x || x === Math.floor(reverseX / 10);
};
