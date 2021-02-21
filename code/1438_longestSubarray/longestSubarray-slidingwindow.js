/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let ans = 0,
    right = 0,
    left = 0,
    minQue = [],
    maxQue = [];
  while (right < nums.length) {
    // 维护一个小值的队列
    while (minQue && minQue[minQue.length - 1] > nums[right]) {
      minQue.pop();
    }
    // 维护一个大值的队列
    while (maxQue && maxQue[maxQue.length - 1] < nums[right]) {
      maxQue.pop();
    }
    // 将当前元素推入两个队列
    minQue.push(nums[right]);
    maxQue.push(nums[right]);
    // 如果当前大队列中的首个值减去小队列的首个值大于limit
    if (minQue && maxQue && maxQue[0] - minQue[0] > limit) {
      // 如果移除的left元素值处在两个队列中则需要移除掉
      if (maxQue[0] === nums[left]) {
        maxQue.shift();
      }
      if (minQue[0] === nums[left]) {
        minQue.shift();
      }
      // left左移动，缩小窗口
      left++;
    }
    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
};

// 时间复杂度 O(N)
// 空间复杂度 O(N)