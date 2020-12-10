/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 如果首次大于5直接返回false
  if (bills[0] > 5) {
    return false;
  }
  // 定义两个变量存放10,5数量
  let ten = 0, five = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
      continue;
    }
    if (bills[i] === 10) {
      if (five === 0) {
        return false;
      }
      ten++;
      five--;
    } else {
      // 20有两种选择,优先使用10+5,没有10的时候使用3个5
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (ten === 0 && five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};