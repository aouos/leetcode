/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  // 构建哈哈希表,记录出现次数
  let map = new Map();
  for (let i = 0; i < barcodes.length; i++) {
    if (!map.has(barcodes[i])) {
      map.set(barcodes[i], 1);
    } else {
      map.set(barcodes[i], map.get(barcodes[i]) + 1);
    }
  }
  let j = 0;
  let ans = [];
  // 转换数组并从小到大排序
  const arr = Array.from(map).sort((a, b) => {
    return a[1] - b[1];
  })
  while (arr.length) {
    // 每次pop一个元素并逐次放入数组ans
    let [temp, count] = arr.pop();
    while (count-- > 0) {
      // 优先放偶数位,如果长度大于等于barcodes长度
      // 进行重置,逐次放入奇数位
      if (j >= barcodes.length) {
        j = 1;
      }
      ans[j] = temp;
      j += 2;
    }
  }
  return ans;
};