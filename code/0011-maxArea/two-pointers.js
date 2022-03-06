/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  const len = height.length;
  let i = 0;
  let j = len - 1;

  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    ans = Math.max(ans, area);
    height[i] > height[j] ? j-- : i++;
  }

  return ans;
};
