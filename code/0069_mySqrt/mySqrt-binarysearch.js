/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0, r = x;
  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (mid ** 2 === x) {
      return mid;
    }
    if (mid ** 2 < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
};

// 时间复杂度 O(logN)
// 空间复杂度 O(1)