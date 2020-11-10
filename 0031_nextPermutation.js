/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [3,2,1];
var nextPermutation = function (nums) {
  function upperaArr(arr, idx) {
    let preArr = arr.slice(0, idx);
    let nextArr = arr.slice(idx);
    for(let i = 0; i < nextArr.length - 1; i++) {
      for(let j = i + 1; j < nextArr.length; j++) {
        if(nextArr[i] > nextArr[j]) {
          let temp = nextArr[i];
          nextArr[i] = nextArr[j];
          nextArr[j] = temp;
        }
      }
    }
    for(let k = 0; k < nextArr.length; k++) {
      preArr.push(nextArr[k])
    }
    return preArr;
  }
  let j = nums.length - 1,i = j;
  while (j > 0) {
    if (nums[j] > nums[j - 1]) {
      break;
    }
    j--;
  }
  while (i >= j) {
    if (nums[i] > nums[j - 1]) {
      let temp = nums[i];
      nums[i] = nums[j - 1];
      nums[j - 1] = temp;
      break;
    }
    i--;
  }
  let res = upperaArr(nums, j);
  return res;
};
console.log(nextPermutation(nums));