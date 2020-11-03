/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = []; // 返回结果
  let wlen = words.length; // words长度，个数
  if (wlen == 0) {
    return res;
  }
  let clen = words[0].length; // 字串长度
  let rlen = wlen * clen; // words总长度
  let sarr = []; // 分割窗口
  words = words.sort().join('');
  function stoArr(n, ss) {
    return ss.substr(n, clen);
  }
  for (let i = 0; i <= s.length - rlen; i++) {
    let shorts = s.substr(i, rlen);
    sarr = [];
    for (let j = 0; j <= shorts.length - clen; j += clen) {
      sarr.push(stoArr(j, shorts));
    }
    let tmpstr = sarr.sort().join('');
    if (tmpstr == words) {
      res.push(i);
    }
  }
  return res;
};