/*
 * @Author: aouos 
 * @Date: 2021-02-22 16:32:36 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-22 17:16:42
 */

// Sorted Array in Ascending Order
function merge(left, right) {
  const res = [];

  while (left.length && right.length) {
    left[0] <= right[0] ? res.push(left.shift()) : res.push(right.shift());
  }

  return res.concat(left, right);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// test
console.log(mergeSort([5, 4, 6, 3, 35, 17, 1]));
// [ 1,  3,  4, 5, 6, 17, 35 ]

console.log(mergeSort([12, 1, 5, 5, 7, 78]));
// [ 1, 5, 5, 7, 12, 78 ]

console.log(mergeSort([-3, 7, -8, 4, 6, -5, -4, 5]));
// [ -8, -5, -4, -3, 4,  5,  6,  7 ]