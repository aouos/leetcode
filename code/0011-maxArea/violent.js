/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  const len = height.length;

  for (let i = 0; i < len; i++) {
    let j = 0;
    while (j < len) {
      if (j !== i && height[j] >= height[i]) {
        const area = Math.abs(i - j) * height[i];
        ans = Math.max(ans, area);
      }
      j++;
    }
  }

  return ans;
};
