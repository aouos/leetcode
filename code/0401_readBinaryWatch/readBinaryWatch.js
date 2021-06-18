/**
 * @param {number} turnedOn
 * @return {string[]}
 */

var readBinaryWatch = function (turnedOn) {
  const ret = [];

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count(i) + count(j) === turnedOn) {
        ret.push(i + ':' + (j < 10 ? '0' + j : j));
      }
    }
  }

  function count(num) {
    let res = 0;

    while (num) {
      num &= (num - 1);
      res++;
    }

    return res;
  }

  return ret;
};

// 时间复杂度: O(1)
// 空间复杂度: O(1)