/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) {
    return true;
  }
  let lenX = coordinates[1][0] - coordinates[0][0];
  let lenY = coordinates[1][1] - coordinates[0][1];
  for (let i = 2; i < coordinates.length; i++) {
    const diffX = coordinates[i][0] - coordinates[0][0];
    const diffY = coordinates[i][1] - coordinates[0][1];
    if (diffX * lenY !== diffY * lenX) {
      return false;
    }
  }
  return true;
};