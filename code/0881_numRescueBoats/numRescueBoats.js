/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

var numRescueBoats = function (people, limit) {
  // 对数组从小到大排序
  people.sort((a, b) => a - b);
  let ret = 0;
  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    // 如果和符合 limit, 左指针右移
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--;
    ret++;
  }

  return ret;
};

// 时间复杂度 O(NlogN)
// 空间复杂度 O(1)