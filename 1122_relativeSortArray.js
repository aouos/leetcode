/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 9, 6];
var relativeSortArray = function (arr1, arr2) {
  if (arr1.length === 0) {
    return arr1;
  }
  function arrSort(idx) {
    let newArr = arr1.slice(idx);
    for (let i = 0; i < newArr.length; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i] > newArr[j]) {
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
      }
    }
    return newArr;
  }
  if (arr2.length === 0) {
    return arrSort(0);
  }
  let index = 0;
  for (let i = 0; i < arr2.length; i++) {
    while (index < arr1.length) {
      if (arr1[index] === arr2[i]) {
        index++;
      } else {
        let pointer = index + 1;
        while (pointer < arr1.length) {
          if (arr1[pointer] === arr2[i]) {
            [arr1[index], arr1[pointer]] = [arr1[pointer], arr1[index]];
            index++;
            break;
          }
          pointer++;
        }
        if (pointer === arr1.length) {
          break;
        }
      }
    }
  }
  let j = arr1.length - 1;
  for (j; j > 0; j--) {
    if (arr1[j] === arr2[arr2.length - 1]) {
      break;
    }
  }
  arr1 = arr1.slice(0, j + 1).concat(arrSort(j + 1));
  return arr1;
};
console.log(relativeSortArray(arr1, arr2));