/*
 * @Author: GJQ 
 * @Date: 2021-01-28 17:13:43 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-01-28 18:08:05
 */

// class declaration
class Stack {
  constructor() {
    this.stack = []
    this.top = 0
  }

  // Add element to the end of the stack
  push(element) {
    this.stack.push(element);
    this.top++;
  }

  // Return and remove the last element of the stack
  pop() {
    if (this.top !== 0) {
      this.top--;
      return this.stack.pop();
    }
    return 'Stack is empty';
  }

  // Return the last element of the stack without removing 
  peek() {
    if (this.top !== 0) {
      return this.stack[this.top - 1];
    }
    return null;
  }

  // Return true if stack is empty, flase otherwise
  isEmpty() {
    return this.top === 0;
  }

  // Return the number of elements in the stack
  size() {
    return this.top;
  }

  // Clear stack elements 
  clear() {
    // this.item = [];
    while (this.top > 0) {
      this.pop();
    }
  }
}