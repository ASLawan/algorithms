// Implementing queue data structure using linkedlist
import List from "./helper.js";

class Queue {
  constructor() {
    this.list = new List();
  }

  // add a new item to the queue
  enqueue = (value) => {
    this.list.append(value);
  };

  // remove an item from the queue
  dequeue = () => {
    return this.list.headDelete();
  };

  // peek the item infront of the queue
  peek = () => {
    return this.list.head.value;
  };

  // check if queue is empty
  isEmpty = () => {
    return this.list.isEmpty();
  };

  // check the number of items in the queue
  getSize = () => {
    return this.list.getSize();
  };

  print = () => {
    return this.list.print();
  };
}

let queue = new Queue();

console.log(`Is the queue empty: ${queue.isEmpty()}`);
console.log(`Current size of the queue: ${queue.getSize()}`);

console.log(
  "========================ADDING ITEMS TO QUEUE===================="
);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(`Is the queue empty: ${queue.isEmpty()}`);
console.log(`Current size of the queue: ${queue.getSize()}`);
queue.print();

console.log(
  "========================REMOVING AN ITEM FROM THE QUEUE===================="
);
queue.dequeue();
console.log(`Is the queue empty: ${queue.isEmpty()}`);
console.log(`Current size of the queue: ${queue.getSize()}`);
queue.print();

console.log("========================PEEKING THE QUEUE====================");

console.log(`Is the queue empty: ${queue.isEmpty()}`);
console.log(`Current size of the queue: ${queue.getSize()}`);
queue.print();
console.log("Item in front of the queue: ", queue.peek());
