/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let ans = [];
  // 当i大于等于0或者K大于0执行
  for (let i = A.length - 1; i >= 0 || K > 0; i--) {
    // 如果i大于等于0,将A[i]的值加到K上
    if (i >= 0) {
      K += A[i];
    }
    // ans推入K对10取模的值
    ans.push(K % 10);
    // K每加一次后除以10
    K = Math.floor(K / 10);
  }
  return ans.reverse();
};

// 时间复杂度 O(max(n,logK))
// 空间复杂度 O(max(n,logK))