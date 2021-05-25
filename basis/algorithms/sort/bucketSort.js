/*
 * @Author: aouos 
 * @Date: 2021-02-24 16:28:45 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-24 16:56:02
 */

// Sorted Array in Descending Order

function bucketSort(arr) {
  const size = 5;
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  const diff = maxValue - minValue;
  const count = Math.floor(diff / size) + 1;
  const buckets = [];
  
  for (let i = 0; i < count; i++) {
    buckets[i] = [];
  }

  for (let j = 0; j < arr.length; j++) {
    const key = Math.floor((arr[j] - minValue) / size);
    buckets[key].push(arr[j]);
  }

  let idx = 0;
  for (let p = 0; p < buckets.length; p++) {
    buckets[p].sort((a, b) => a - b);
    while (buckets[p].length) {
      arr[idx] = buckets[p].shift();
      idx++;
    }
  }

  return arr;
}


// ********** test ********** //
console.log(bucketSort([6, 11, 1, 8, 32, 5]));
// [ 1, 5, 6, 8, 11, 32 ]

console.log(bucketSort([4, 7, 2, 5, 3, -1, 9, 0]));
// [ -1, 0, 2, 3, 4, 5, 7, 9 ]

console.log(bucketSort([-12, -3, 0, 4, 3, 9]));
// [ -12, -3, 0, 3, 4, 9 ]