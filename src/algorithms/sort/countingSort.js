/*
 * @Author: aouos 
 * @Date: 2021-02-24 11:04:15 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-24 11:25:45
 */

// Sorted Array in Descending Order

function countingSort(arr) {
  const large = Math.max(...arr);
  const small = Math.min(...arr);
  const size = large - small + 1;
  const count = new Array(size).fill(0);
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - small]++;
  }

  for (let j = 0; j < size; j++) {
    while (count[j]) {
      arr[idx++] = j + small;
      count[j]--;
    }
  }

  return arr;
}


// ********** test ********** //
console.log(countingSort([6, 2, 1, 8, 7, 5]));
// [ 1, 2, 5, 6, 7, 8 ]

console.log(countingSort([4, 7, 2, 5, 3, -1, 9, 0]));
// [ -1, 0, 2, 3, 4, 5, 7, 9 ]

console.log(countingSort([-12, -3, 3, 4, 3, 8]));
// [ -12, -3, 3, 3, 4, 8 ]