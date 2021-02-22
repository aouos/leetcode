/*
 * @Author: aouos 
 * @Date: 2021-02-21 21:47:27 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-22 17:18:13
 */

// Sorted Array in Descending Order
function insertionSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    const temp = arr[i];
    let j = i;
    for (j; j > 0 && arr[j - 1] < temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }

  return arr;
}

// test
console.log(insertionSort([3, 6, 1, 8, 9, 5]));
// [ 9, 8, 6, 5, 3, 1 ]

console.log(insertionSort([-3, 7, -8, 4, 6, -5, -4, 5]));
// [ 7, 6, 5, 4, -3, -4, -5, -8 ]

console.log(insertionSort([12, 0, 3, -4, 3, 78]));
// [ 78, 12, 3, 3, 0, -4 ]