/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = [];
  const dfs = (idx, list) => {
    // 指针越界
    if (idx === nums.length) {
      ans.push(list.slice(0));
      return;
    }
    list.push(nums[idx]);
    // 基于此选择递归
    dfs(idx + 1, list);
    // 撤销上次选择
    list.pop();
    dfs(idx + 1, list);
  }
  dfs(0, []);
  return ans;
};