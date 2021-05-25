/*
 * @Author: aouos  
 * @Date: 2021-02-23 11:47:19 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-23 15:50:52
 */

// Sorted Array in Ascending Order

function heapify(arr, idx, len) {
  let maxPoint = idx;
  const left = idx * 2 + 1;
  const right = idx * 2 + 2;

  if (left < len && arr[left] > arr[maxPoint]) {
    maxPoint = left;
  }
  if (right < len && arr[right] > arr[maxPoint]) {
    maxPoint = right;
  }

  if (maxPoint !== idx) {
    [arr[idx], arr[maxPoint]] = [arr[maxPoint], arr[idx]];
    heapify(arr, maxPoint, len);
  }
}

function heapSort(arr) {
  let len = arr.length;

  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }

  while (--len) {
    [arr[0], arr[len]] = [arr[len], arr[0]];
    heapify(arr, 0, len);
  }

  return arr;
}


// ********** test ********** //
console.log(heapSort([6, 2, 1, 8, 7, 5]));
// [ 1, 3, 5, 6, 8, 9 ]

console.log(heapSort([4, 7, 2, 5, 3, 1, 9, 0]));
// [ 0, 1, 2, 3, 4, 5, 7, 9 ]

console.log(heapSort([12, 0, 3, 4, 3, 8]));
// [ 0, 3, 3, 4, 8, 12 ]