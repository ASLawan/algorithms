// A queue is a linear data structure that follows the FIFO
// (First In, First Out) principle. This means the first
// element added to the queue will be the first one to be
// removed, similar to how people stand in a line: the first
// person in line is the first one to be served.

// Key Operations of a Queue:
// Enqueue: Adds an element to the back of the queue.
// Dequeue: Removes the element from the front of the queue.
// Peek/Front: Returns the element at the front of the queue without removing it.
// isEmpty: Checks if the queue is empty.
// size: Returns the number of elements in the queue

class Queue {
  constructor() {
    this.items = [];
  }

  // add item to queue
  enqueue = (item) => {
    this.items.push(item); // constant time complexity
  };

  // remove item from queue
  dequeue = () => {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift(); // linear time complexity
  };

  // view item infront of the queue
  peek = () => {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  };

  // check if queue is empty
  isEmpty = () => {
    return this.items.length === 0;
  };

  // size of the queue
  size = () => {
    return this.items.length;
  };

  // clear the queue
  clear = () => {
    this.items = [];
  };
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
