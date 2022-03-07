/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  let l = 0;
  let r = len - 1;
  let leftMax = height[0];
  let rightMax = height[len - 1];
  let ans = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      ans += leftMax - height[l];
      leftMax = Math.max(leftMax, height[++l]);
    } else {
      ans += rightMax - height[r];
      rightMax = Math.max(rightMax, height[--r]);
    }
  }

  return ans;
};
