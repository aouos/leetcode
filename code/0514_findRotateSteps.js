/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
let ring = "godding", key = "gd";
var findRotateSteps = function (ring, key) {
  let indexMap = {}; // 构建索引地图
  let memoryArr = []; // 记忆数组
  for (let i = 0; i < ring.length; i++) {
    if (indexMap[ring[i]]) {
      indexMap[ring[i]].push(i);
    } else {
      indexMap[ring[i]] = [i];
    }
    memoryArr[i] = new Array(key.length).fill(-1);
  }
  let dfs = function (pointer, keyIdx) {
    if (keyIdx == key.length) {
      return 0;
    }
    if (memoryArr[pointer][keyIdx] !== -1) {
      return memoryArr[pointer][keyIdx];
    }
    let keyVal = key[keyIdx];
    let res = Infinity;
    for (const items of indexMap[keyVal]) {
      let pointerR = Math.abs(pointer - items);
      let pointerL = ring.length - pointerR;
      let currentLen = Math.min(pointerR, pointerL);
      let nextLen = dfs(items, keyIdx + 1);
      res = Math.min(res, currentLen + nextLen);
    }
    memoryArr[pointer][keyIdx] = res;
    return res;
  }
  return key.length + dfs(0, 0);
};
console.log(findRotateSteps(ring, key));