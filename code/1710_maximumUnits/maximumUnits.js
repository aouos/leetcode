/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let arr = boxTypes;
  let ans = 0;
  arr.sort((a, b) => {
    return b[1] - a[1];
  })
  for (let i = 0; i < arr.length; i++) {
    if (truckSize > arr[i][0]) {
      truckSize = truckSize - arr[i][0];
      ans += arr[i][0] * arr[i][1];
    } else {
      ans += truckSize * arr[i][1];
      truckSize = 0;
    }
  }
  return ans;
};