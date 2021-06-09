/*
 * @Author: aouos 
 * @Date: 2021-06-09 22:28:56 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-06-09 22:55:36
 */

class Array {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    return this.array[index];
  }

  add(item) {
    this.array.push(item);
    this.size++;
  }

}

module.exports = Array;