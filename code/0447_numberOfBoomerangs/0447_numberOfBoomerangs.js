/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let ans = 0;
  for (let i = 0; i < points.length; i++) {
    // 创建map记录每个点到自己的距离
    let map = new Map();
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        // 求出距离
        let len = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
        // 判断当前是否有值
        if (!map.has(len)) {
          map.set(len, 1);
        } else {
          ans += map.get(len) * 2;
          map.set(len, map.get(len) + 1);
        }
      }
    }
  }
  return ans;
};