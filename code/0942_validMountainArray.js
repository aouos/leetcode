/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  }
  let l = 0, r = A.length - 1;
  while (A[l] < A[l + 1]) {
    l++;
  }
  while (A[r] < A[r - 1]) {
    r--;
  }
  if (l !== 0 && r !== A.length - 1 && l === r) {
    return true;
  }
  return false;
};