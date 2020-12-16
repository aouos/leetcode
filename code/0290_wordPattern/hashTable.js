/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // map记录中pattern作为key,s值作为value
  let map = new Map();
  // smap记录s中此值是否已经存在
  let smap = new Map();
  const arr = s.split(' ');
  if (pattern.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(pattern[i])) {
      // 如果smap中存在说明已经存在过直接返回
      if (smap.has(arr[i])) {
        return false;
      }
      map.set(pattern[i], arr[i]);
      smap.set(arr[i], 1);
    } else {
      // 如果map取到的值与s中对应位置不同,返回false
      if (map.get(pattern[i]) !== arr[i]) {
        return false;
      }
    }
  }
  return true;
};