/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0;
    let r = n;
    while (l < r) {
      const mid = l + Math.floor((r - l) >> 1);
      if (!isBadVersion(mid)) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  };
};

// 时间复杂度 O(logN)
// 空间复杂度 O(1)