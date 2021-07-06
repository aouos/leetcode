/**
 * @param {number[][]} intervals
 * @return {number}
 */

var eraseOverlapIntervals = function (intervals) {
  // 根据后一个值进行排序
  intervals.sort((a, b) => a[1] - b[1]);
  const n = intervals.length;
  let right = intervals[0][1];
  let ans = 1;

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      // ans 表示非交叉区间个数
      ans++;
      right = intervals[i][1];
    }
  }

  return n - ans;
};

// 时间复杂度 O(NlogN)
// 空间复杂度 O(1)