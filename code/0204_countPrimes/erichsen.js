/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrimes = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      ans++;
      for (let j = i * i; j < n; j += i) {
        isPrimes[j] = 0;
      }
    }
  }
  return ans;
};