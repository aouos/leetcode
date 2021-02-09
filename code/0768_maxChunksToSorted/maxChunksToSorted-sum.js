/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  // 重新定义一个排序后的数组
  let sortArr = [...arr];
  sortArr.sort((a, b) => a - b);
  let ans = 0,
    sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += sortArr[i];
    // 如果和相等说明能够切块排序
    if (sum1 === sum2) {
      ans++;
      // 将两个和重置为0
      sum1 = sum2 = 0;
    }
  }
  return ans;
};

// 时间复杂度 O(NlogN)
// 空间复杂度 O(N)