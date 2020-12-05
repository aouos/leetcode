/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let pointer = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    if (nums1[len1] <= nums2[len2]) {
      nums1[pointer] = nums2[len2];
      len2--;
      pointer--;
    } else {
      nums1[pointer] = nums1[len1];
      len1--;
      pointer--;
    }
  }
  if (len2 !== -1) {
    let n = len2 + 1;
    nums1 = nums2.slice(0, n).concat(nums1.slice(n));
  }
  return nums1;
};