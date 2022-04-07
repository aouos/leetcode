/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const sl = s.length;
  const gl = goal.length;

  if (sl !== gl) {
    return false;
  }

  for (let i = 0; i < sl; i++) {
    if (s[i] === goal[0]) {
      let str = '';
      let p = i;
      let c = 0;
      while (c < sl) {
        str += s[p];
        c++;
        p = (p + 1) % sl;
      }

      if (str === goal) {
        return true;
      }
    }
  }

  return false;
};
