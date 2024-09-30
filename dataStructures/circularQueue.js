class Queue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  // check if Queue is full
  isFull = () => {
    return this.currentLength === this.capacity;
  };

  // check if Queue is empty
  isEmpty = () => {
    return this.currentLength === 0;
  };

  // Add element to the Queue
  enqueue = (item) => {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity; // fixed capacity
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  };

  // Remove item from Queue
  dequeue = () => {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    const itemToRemove = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return itemToRemove;
  };

  // peek the front item
  peek = () => {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return "Queue is empty!";
  };

  // print Queue items
  print = () => {
    if (this.isEmpty()) {
      return "Queue is empty!";
    } else {
      let i;
      let str = "";

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  };
}

const q = new Queue(5);

console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.print();

console.log(q.dequeue());
q.print();

q.enqueue(60);

q.print();
