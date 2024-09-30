// Implementing the stack data structure using linked list

import List from "./helper.js";

class Stack {
  constructor() {
    this.list = new List();
  }

  // add a new item to the stack
  push = (value) => {
    this.list.prepend(value);
  };

  // remove item from the stack
  pop = () => {
    return this.list.headDelete();
  };

  // view item ontop of the stack
  peek = () => {
    return this.list.head.value;
  };

  // check if stack is empty

  isEmpty = () => {
    return this.list.isEmpty();
  };

  // check the current size of the stack

  getSize = () => {
    return this.list.getSize();
  };

  // print the stack
  print = () => {
    return this.list.print();
  };
}

let stack = new Stack();

console.log(`Is the stack empty: ${stack.isEmpty()}`);
console.log(`Current size of the stack: ${stack.getSize()}`);

console.log(
  "========================ADDING ITEMS TO STACK===================="
);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(`Is the stack empty: ${stack.isEmpty()}`);
console.log(`Current size of the stack: ${stack.getSize()}`);
stack.print();

console.log(
  "========================REMOVING AN ITEM FROM THE STACK===================="
);
stack.pop();
console.log(`Is the stack empty: ${stack.isEmpty()}`);
console.log(`Current size of the stack: ${stack.getSize()}`);
stack.print();

console.log("========================PEEKING THE STACK====================");

console.log(`Is the stack empty: ${stack.isEmpty()}`);
console.log(`Current size of the stack: ${stack.getSize()}`);
stack.print();
console.log("Last item stacked: ", stack.peek());
