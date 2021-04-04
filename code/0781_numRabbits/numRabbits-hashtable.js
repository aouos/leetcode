/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let ans = 0;
  let map = new Map();

  for (let i = 0; i < answers.length; i++) {
    const item = answers[i];
    map.has(item) ? map.set(item, map.get(item) - 1) : map.set(item, item);
    if (map.get(item) === 0) {
      ans += item + 1;
      map.delete(item);
    }
  }

  Array.from(map.keys(), (item) => {
    ans += item + 1;
  });

  return ans;
};