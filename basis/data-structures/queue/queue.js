/*
 * @Author: aouos 
 * @Date: 2021-01-28 17:13:43 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-05-25 10:48:03
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