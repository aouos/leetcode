/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let ans = [];
  for (let i = A.length - 1; i >= 0; i--) {
    // 当前位置与K和10求模相加
    let sum = A[i] + (K % 10);
    K = Math.floor(K / 10);
    // 如果相加结果大于10,K自加并使sum减去10
    if (sum >= 10) {
      K++;
      sum -= 10;
    }
    ans.push(sum);
  }
  // 处理A完成后K并未加完情况
  while (K > 0) {
    ans.push(K % 10);
    K = Math.floor(K / 10);
  }
  return ans.reverse();
};

// 时间复杂度 O(max(n,logK))
// 空间复杂度 O(max(n,logK))