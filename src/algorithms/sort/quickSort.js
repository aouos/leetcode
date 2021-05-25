/*
 * @Author: aouos 
 * @Date: 2021-02-23 11:43:54 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-23 11:55:56
 */

// Sorted Array in Ascending Order

function quickSort(arr) {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const pivot = arr[0];
  let small = [];
  let large = [];

  for (let i = 1; i < len; i++) {
    arr[i] > pivot ? large.push(arr[i]) : small.push(arr[i]);
  }

  return quickSort(small).concat(pivot, quickSort(large));
}


// ********** test ********** //
console.log(quickSort([5, 8, 1, 4, 3, 0]));
// [ 0, 1, 3, 4, 5, 8 ]

console.log(quickSort([1, 5, 2, 23, 56, 34, 20]));
// [ 1,  2,  5, 20, 23, 34, 56 ]

console.log(quickSort([5, 8, 2, 5, 3, 1]));
// [ 1, 2, 3, 5, 5, 8 ]