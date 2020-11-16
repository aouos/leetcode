/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
var reconstructQueue = function (people) {
  function sortPeople(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][0] <= arr[j][0]) {
          if (arr[i][0] === arr[j][0] && arr[i][1] < arr[j][1]) {
            continue;
          }
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  let sortpeople = sortPeople(people);
  let res = [];
  for (let key in sortpeople) {
    res.splice(sortpeople[key][1],0,sortpeople[key]);
  }
  return res;
};
console.log(reconstructQueue(people));