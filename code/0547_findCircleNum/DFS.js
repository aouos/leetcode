/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let ans = 0;
  const len = M.length;
  // 定义一个数组记录遍历轨迹
  const visited = new Array(len).fill(0);
  // DFS查找朋友
  function dfs(i) {
    for (let j = 0; j < len; j++) {
      // 当i与j不相等时（不是同一个人，相同直接跳过）
      // 当visited[j]为0是说明此人还未确定关系或者没有遍历过朋友关系
      // 当M[i][j]为1说明此人与当前的有朋友关系
      // 满足这些三项条件即和此人确定朋友关系，在根据此朋友DFS遍历朋友圈
      if (i !== j && !visited[j] && M[i][j]) {
        visited[j] = 1;
        dfs(j);
      }
    }
  }
  // 遍历人数，最坏情况对角线全为1
  for (let i = 0; i < len; i++) {
    // 当未遍历此人时，赋值为1后DFS搜索朋友圈
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i);
      // 结果进行累加
      ans++;
    }
  }
  return ans;
};