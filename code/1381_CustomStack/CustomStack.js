class CustomStack {
  constructor(n) {
    this.maxTop = n;
    this.top = 0;
    this.stack = [];
  }

  push(element) {
    if (this.top < this.maxTop) {
      this.stack.push(element);
      this.top++;
    }
  }

  pop() {
    if (this.top > 0) {
      this.top--;
      return this.stack.pop();
    }
    return -1;
  }

  increment(k, val) {
    k = Math.min(k, this.top);
    for (let i = 0; i < k; i++) {
      this.stack[i] += val;
    }
  }
}

// 时间复杂度 push,pop  O(1),inc  O(n)
// 空间复杂度 O(n)