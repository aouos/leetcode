/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordSize = words[0].length;
  const wordsLen = wordSize * words.length;
  let map = new Map();
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    map.has(words[i]) ? map.set(words[i], map.get(words[i]) + 1) : map.set(words[i], 1);
  }
  for (let i = 0; i < s.length - wordsLen + 1; i++) {
    const tmap = new Map(map);
    let count = words.length;
    for (let p = i; p < i + wordsLen; p += wordSize) {
      const word = s.slice(p, p + wordSize);
      if (!tmap.has(word) || tmap.get(word) <= 0) {
        break;
      }
      tmap.set(word, tmap.get(word) - 1);
      count--;
    }
    if (count === 0) {
      ans.push(i);
    }
  }
  return ans;
};