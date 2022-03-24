/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    const temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }

  return s;
};
