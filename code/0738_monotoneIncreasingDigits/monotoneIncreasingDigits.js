/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  // 将字符串转换为数组存放
  const arrN = N.toString().split('');
  // 定义数组存放最终结果
  let ans = [];
  let idx = arrN.length;
  // 遍历数组，看本身是否为递增，如果不是找到最后一个小于前面的索引
  for (let i = idx - 1; i > 0; i--) {
    if (arrN[i] <= arrN[i - 1]) {
      idx = i;
    }
  }
  // 如果idx未变说明是递增直接返回
  if (idx === arrN.length) {
    return N;
  }
  // 后循环，从索引位置往后全部填充9
  for (let j = arrN.length - 1; j >= 0; j--) {
    if (j > idx) {
      ans.unshift(9);
      continue;
    }
    if (j === idx) {
      ans.unshift(9);
      // 索引位置填充9后将前一个值减去1
      arrN[j - 1] -= 1;
    } else {
      // 如果减去1后还小于前一个数，递减idx
      if (arrN[j] < arrN[j - 1]) {
        idx--;
        j++;
        continue;
      }
      ans.unshift(arrN[j]);
    }
  }
  return parseInt(ans.join(''));
};