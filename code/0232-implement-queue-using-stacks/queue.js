var MyQueue = function () {
  this.orderStack = [];
  this.rOrderStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.orderStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.rOrderStack.length) {
    while (this.orderStack.length) {
      this.rOrderStack.push(this.orderStack.pop());
    }
  }
  return this.rOrderStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.rOrderStack.length) {
    while (this.orderStack.length) {
      this.rOrderStack.push(this.orderStack.pop());
    }
  }
  return this.rOrderStack[this.rOrderStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.orderStack.length && !this.rOrderStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
