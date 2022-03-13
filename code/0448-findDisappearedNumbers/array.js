/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const ans = [];
  const len = nums.length;
  const newArr = new Array(len + 1).fill(0);

  for (const item of nums) {
    newArr[item] = item;
  }

  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] === 0) {
      ans.push(i);
    }
  }

  return ans;
};
