/*
 * @Author: aouos 
 * @Date: 2021-02-22 14:03:20 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-23 11:56:17
 */

// Sorted Array in Ascending Order

function shellSort(arr) {
  let len = arr.length;

  for (let h = Math.floor(len / 2); h > 0; h = Math.floor(h / 2)) {
    for (let i = h; i < len; i++) {
      for (let j = i - h; j >= 0 && arr[j] > arr[j + h]; j -= h) {
        [arr[j], arr[j + h]] = [arr[j + h], arr[j]];
      }
    }
  }

  return arr;
}


// ********** test ********** //
console.log(shellSort([5, 4, 6, 3, 35, 17, 1]));
// [ 1,  3,  4, 5, 6, 17, 35 ]

console.log(shellSort([5, 4, 6, 3, 35, 17, 1, 26]));
// [ 1,  3,  4,  5, 6, 17, 26, 35 ]

console.log(shellSort([22, 1, 5, 9, 12, - 6, 1]));
// [ -6,  1,  1, 5, 9, 12, 22 ]