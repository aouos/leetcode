/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    nums1[i] < nums2[j] ? merged.push(nums1[i++]) : merged.push(nums2[j++]);
  }
  while (i < nums1.length) {
    merged.push(nums1[i++]);
  }
  while (j < nums2.length) {
    merged.push(nums2[j++]);
  }

  const { length } = merged;

  return length % 2 === 1
    ? merged[Math.floor(length / 2)]
    : (merged[length / 2] + merged[length / 2 - 1]) / 2;
};
