/*
 * @Author: aouos 
 * @Date: 2021-02-24 14:08:22 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-02-24 15:51:15
 */

// Sorted Array in Descending Order

function radixSort(arr) {
  const radixBase = 10;
  const buckets = [];

  for (let i = 0; i < radixBase; i++) {
    buckets[i] = [];
  }

  let maxValue = Math.max(...arr);
  let digits = 0;

  do {
    digits++;
    maxValue = Math.floor(maxValue / radixBase);
  } while (maxValue !== 0);

  let placement = 1;

  for (let i = 0; i < digits; i++) {
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i] / placement;
      buckets[Math.floor(temp % radixBase)].push(arr[i]);
    }

    let p = 0;
    for (let j = 0; j < radixBase; j++) {
      const buck = buckets[j];
      while (buck.length) {
        arr[p] = buck.shift();
        p++;
      }
    }

    placement *= 10;
  }

  return arr;
}


// ********** test ********** //
console.log(radixSort([12, 2, 1, 28, 27, 56, 123]));
// [ 1,  2,  12, 27, 28, 56, 123 ]

console.log(radixSort([412, 7, 102, 55, 3333, 1, 99, 100]));
// [ 1, 7, 55, 99, 100, 102, 412, 3333 ]

console.log(radixSort([12, 2, 0, 4, 3, 8]));
// [ 0, 2, 3, 4, 8, 12 ]