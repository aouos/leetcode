/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length;) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0 || !flowerbed[i + 1]) {
        n--;
        i += 2;
      } else {
        i++;
      }
    } else {
      i += 2;
    }
  }
  return n <= 0 ? true : false;
};
console.log(canPlaceFlowers([0,0,1,0,0], 1));