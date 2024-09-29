// A stack is a linear data structure that follows the LIFO
// (Last In, First Out) principle. This means that the last
// element added to the stack will be the first one to be
// removed. Think of it like a stack of plates; the last
// plate placed on top is the first one you can remove.

// Key Operations of a Stack:
// Push: Adds an element to the top of the stack.
// Pop: Removes the element from the top of the stack.
// Peek: Returns the element at the top of the stack without removing it.
// isEmpty: Checks if the stack is empty.
// size: Returns the number of elements in the stack.

class Stack {
  constructor() {
    this.items = [];
  }

  // add element to stack - PUSH
  addElement = (element) => {
    this.items.push(element);
  };

  // remove and return the top element - POP
  removeElemnt = () => {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  };

  // view the element at the top - PEEK
  peekElement = () => {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  };

  // check if stack is empty
  isEmpty = () => {
    return this.items.length === 0;
  };

  // returns the size of the stack
  size = () => {
    return this.items.length;
  };

  // empties the stack

  clear = () => {
    this.items = [];
  };
}

const stack = new Stack();
stack.addElement(10);
stack.addElement(20);
stack.addElement(30);
console.log(stack.peekElement());
console.log(stack.removeElemnt());
console.log(stack.size());
console.log(stack.isEmpty());
