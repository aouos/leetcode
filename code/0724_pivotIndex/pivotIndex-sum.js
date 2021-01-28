/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 求出数组总和
  let total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 判断i左侧值的2倍等于total - nums[i],i左右和相等
    if (sum * 2 + nums[i] === total) {
      return i;
    }
    sum += nums[i];
    console.log(i,sum);
  }
  return -1;
};
pivotIndex([1,7,3,6,5,6])

// 时间复杂度 O(N)
// 空间复杂度 O(1)