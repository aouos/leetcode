/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let ans = 0;
  const len = M.length;
  const visited = new Array(len).fill(0);
  // 与DFS对比需要额外队列
  const queue = [];

  function bfs(i) {
    queue.push(i);
    while (queue.length) {
      const i = queue.shift();
      for (let j = 0; j < len; j++) {
        // 判断方式与DFS相同
        if (i !== j && !visited[j] && M[i][j]) {
          visited[j] = 1;
          queue.push(j);
        }
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      bfs(i);
      ans++;
    }
  }
  return ans;
};