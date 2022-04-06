/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let ans = 0;

  for (const c of s) {
    ans ^= c.charCodeAt();
  }

  for (const c of t) {
    ans ^= c.charCodeAt();
  }

  return String.fromCharCode(ans);
};
