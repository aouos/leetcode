/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 0;
  let r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
