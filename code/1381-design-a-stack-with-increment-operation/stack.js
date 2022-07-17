/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.max = maxSize;
  this.stack = [];
  this.top = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.top < this.max) {
    this.stack.push(x);
    this.top++;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.top > 0) {
    this.top--;
    return this.stack.pop();
  }

  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const min = Math.min(k, this.top);
  for (let i = 0; i < min; i++) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
