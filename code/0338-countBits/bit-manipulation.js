/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    ans[i] = oneCounter(i);
  }

  return ans;
};

const oneCounter = (x) => {
  let count = 0;

  while (x) {
    x &= x - 1;
    count++;
  }

  return count;
};
