/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  let ans = '';
  let maxLen = 0;
  let p = 0;

  while (p < len) {
    let left = p - 1;
    while (left >= 0 && s[left] === s[p]) {
      left--;
    }

    let right = p + 1;
    while (right < len && s[right] === s[p]) {
      right++;
    }

    const end = right;

    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }

    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      ans = s.substring(left + 1, right);
    }

    p = end;
  }

  return ans;
};
