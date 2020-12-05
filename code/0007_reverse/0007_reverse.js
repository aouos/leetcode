/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  let m = Math.abs(x);
  let n = 0;
  while (m != 0) {
    let s = m % 10;
    m = parseInt(m / 10);
    n = n * 10 + s;
  }
  if (n > max || n < min) {
    return 0;
  }
  if (x > 0) {
    return n;
  } else {
    return -n;
  }
};