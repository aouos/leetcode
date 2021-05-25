/*
 * @Author: GJQ 
 * @Date: 2021-01-28 17:13:43 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-01-31 14:27:56
 */

// class declaration
class Queue {
  constructor() {
    this.queue = []
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  // Return the queue first element
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  // Return true if queue is empty, flase otherwise
  isEmpty() {
    return this.queue.length === 0;
  }

  // Return the number of elements in the queue
  size() {
    return this.queue.length;
  }
}

// test
const queue = new Queue();
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(5);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.size());