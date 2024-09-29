class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // add item to queue
  enqueue = (item) => {
    this.items[this.rear] = item; // constant time complexity
    this.rear++;
  };

  // remove item from queue
  dequeue = () => {
    const itemRemmoved = this.items[this.front];
    delete this.items[this.front]; // constant time complexity
    this.front++;
    return itemRemmoved;
  };

  // peek the front item
  peek = () => {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items[this.front];
  };

  // check if queue os empty
  isEmpty = () => {
    return this.rear === this.front;
  };

  // clear queue
  clear = () => {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  };

  // size
  size = () => {
    return this.rear - this.front;
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
