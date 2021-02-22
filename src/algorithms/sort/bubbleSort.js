/*
 * @Author: aouos 
 * @Date: 2021-02-21 21:05:21 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-22 17:17:10
 */

// Sorted Array in Ascending Order
function bubbleSort(arr) {
  let len = arr.length;
  
  while (--len) {
    for (let p = 0; p < len; p++) {
      if (arr[p] > arr[p + 1]) {
        [arr[p], arr[p + 1]] = [arr[p + 1], arr[p]];
      }
    }
  }

  return arr;
}

// test
console.log(bubbleSort([3, 6, 1, 8, 9, 5]));
// [ 1, 3, 5, 6, 8, 9 ]

console.log(bubbleSort([-3, 7, -8, 4, 6, -5, -4, 5]));
// [ -8, -5, -4, -3, 4, 5, 6, 7 ]

console.log(bubbleSort([12, 0, 3, -4, 3, 78]));
// [ -4, 0, 3, 3, 12, 78 ]