/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let ans = 0;

  for (let i = 0; i < points.length; i++) {
    const map = new Map();

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const dist = getDistance(points[i], points[j]);
      if (!map.has(dist)) {
        map.set(dist, 1);
      } else {
        ans += map.get(dist) * 2;
        map.set(dist, map.get(dist) + 1);
      }
    }
  }

  return ans;
};

function getDistance(pre, next) {
  const x = next[0] - pre[0];
  const y = next[1] - pre[1];

  return x * x + y * y;
}

// 时间复杂度 O(N²)
// 空间复杂度 O(N²)