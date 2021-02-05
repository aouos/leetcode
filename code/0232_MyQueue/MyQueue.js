class MyQueue {
  constructor() {
    this.pushStack = []
    this.popStack = []
  }

  push(element) {
    this.pushStack.push(element);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }

}

// 时间复杂度：O(1)或O(n)
// 空间复杂度：O(n)