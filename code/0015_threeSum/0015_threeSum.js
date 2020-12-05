/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  // 数组长度小于3直接返回
  if (nums.length < 3) {
    return res;
  }
  // 对数组进行升序排列
  nums.sort((a, b) => { return a - b });
  // 遍历数组,到长度减去2位结束
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前值大于0直接结束
    if (nums[i] > 0) {
      break;
    }
    // 当前值与前一个相等跳过
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    // 从当前值右边开始定义双指针从两头进行查找
    for (let x = i + 1, y = nums.length - 1; x < y;) {
      // 三个数和小于0,x右移动;三个数和大于0,y左移动
      if (nums[i] + nums[x] + nums[y] < 0) {
        x++;
      } else if (nums[i] + nums[x] + nums[y] > 0) {
        y--;
      } else {
        if (nums[x] === nums[x - 1] && nums[y] === nums[y + 1]) {
          x++; y--;
          continue;
        }
        res.push([nums[i], nums[x], nums[y]]);
        x++; y--;
      }
    }
  }
  return res;
};