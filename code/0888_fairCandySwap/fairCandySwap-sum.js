/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  // 求出两个数组的和
  const sumA = A.reduce((a, b) => a + b, 0);
  const sumB = B.reduce((a, b) => a + b, 0);
  const map = new Set();
  // 构建A数组的哈希表
  A.map(a => {
    map.add(a);
  })
  // 求出A,B两数的中间数
  // 此处也可以使用A-B求差值
  const mid = (sumA + sumB) / 2;
  for (let i = 0; i < B.length; i++) {
    const diff = mid - sumB + B[i];
    if (map.has(diff)) {
      if (sumA - diff + B[i] === mid) {
        return [diff, B[i]];
      }
    }
  }
};

// 时间复杂度 O(N + M)
// 空间复杂度 O(N)