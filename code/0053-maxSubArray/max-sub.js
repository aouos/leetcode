/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.lemgth;
  let sum = -100001;

  for (let i = 0; i < len; i++) {
    let temp = nums[i];
    console.log(temp);

    for (let j = i + 1; j < len; j++) {
      temp += nums[j];
      console.log(temp);
      sum = Math.max(sum, temp);
    }
  }

  return sum;
};
