/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
var reconstructQueue = function (people) {
  if (people.length === 0) {
    return [];
  }
  let ans = [];
  people.sort((a, b) => {
    return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1];
  })
  people.forEach(item => {
    ans.splice(item[1], 0, item);
  })
  return ans;
};
console.log(reconstructQueue(people));