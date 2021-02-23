/*
 * @Author: aouos 
 * @Date: 2021-02-22 11:53:38 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-23 11:56:10
 */

// Sorted Array in Ascending Order

function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  
  return arr;
}


// ********** test ********** //
console.log(selectionSort([3, - 6, 1, -2, 9, 7]));
// [ -6, -2, 1, 3, 7, 9 ]

console.log(selectionSort([3, 12, 4, 6, 43, 6, 9]));
// [ 3,  4,  6, 6, 9, 12, 43 ]

console.log(selectionSort([12, 1, 5, 5, 7, 78]));
// [ 1, 5, 5, 7, 12, 78 ]