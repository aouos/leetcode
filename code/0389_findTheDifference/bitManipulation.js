/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let ans = 0;
  for (const ch of s) {
    ans ^= ch.charCodeAt();
  }
  for (const ch of t) {
    ans ^= ch.charCodeAt();
  }
  return String.fromCharCode(ans);
};