/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
  let l = 0;
  let r = x;

  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (x / mid === mid) {
      return mid;
    } else if (x / mid < mid) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return r;
};