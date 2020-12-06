/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = [];
  const dfs = (idx, list) => {
    ans.push(list.slice(0));
    for (let i = idx; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(i + 1, list);
      list.pop();
    }
  }
  dfs(0, []);
  return ans;
};