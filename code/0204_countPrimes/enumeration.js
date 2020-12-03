/**
 * @param {number} n
 * @return {number}
 */
const isPrimes = (x) => {
  // 遍历查找，结束条件小于等于根号下当前值即可
  // 使用 i * i 代替 Math.sqrt(x)
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

var countPrimes = function (n) {
  let ans = 0;
  // 从2开始循环
  for (let i = 2; i < n; i++) {
    ans += isPrimes(i);
  }
  return ans;
};