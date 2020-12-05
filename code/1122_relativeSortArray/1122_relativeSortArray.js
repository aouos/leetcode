/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
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
  arr1 = arr1.slice(0, index).concat(arrSort(index));
  return arr1;
};