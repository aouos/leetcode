/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length;
  const ans = [];
  const used = new Array(len).fill(false);

  const backtracking = (idx, res) => {
    if (idx === len) {
      ans.push([...res]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!used[i]) {
        res.push(nums[i]);
        used[i] = true;
        backtracking(idx + 1, res);

        used[i] = false;
        res.pop();
      }
    }
  };

  backtracking(0, []);

  return ans;
};
