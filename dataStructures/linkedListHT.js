class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // check if list is empty
  isEmpty = () => {
    return this.size === 0;
  };

  // get the length(size) of the list
  getSize = () => {
    return this.size;
  };

  // add new node to the front(head) of the list
  prepend = (value) => {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size += 1;
  };

  // add a new node to the rear(tail) of the list
  append = (value) => {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  };

  // Remove node from the front (head) of the list
  headDelete = () => {
    if (this.isEmpty()) {
      console.log("List is empty - nothing to remove at the head");
    } else {
      const nodeToRemove = this.head.value;
      this.head = this.head.next;

      this.size -= 1;

      console.log(`Node removed at the head: ${nodeToRemove}`);
    }
  };

  // Remove a node from the rear(tail) of the list
  tailDelete = () => {
    if (this.isEmpty()) {
      console.log("List is empty - nothing to remove at the head");
    }

    const nodeToRemove = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = this.head;
      while (prevNode.next !== this.tail) {
        prevNode = prevNode.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
    }
    this.size -= 1;
    return nodeToRemove;
  };

  // print list nodes
  print = () => {
    if (this.isEmpty()) {
      console.log("List is empty - nothing to print");
    } else {
      let nodes = "";
      let currentNode = this.head;
      while (currentNode) {
        nodes += `${currentNode.value} `;
        currentNode = currentNode.next;
      }
      console.log(nodes);
    }
  };
}

// test

const list = new List();

console.log(`Is list empty: ${list.isEmpty()}`);
console.log(`Current list size is: ${list.size}`);

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
console.log(
  "===============================PREPENDING TO THE LIST=========================="
);
console.log(`Is list empty: ${list.isEmpty()}`);
console.log(`Current list size is: ${list.size}`);
console.log(`Current list:`);
list.print();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log(
  "===============================APPENDING TO THE LIST=========================="
);
console.log(`Is list empty: ${list.isEmpty()}`);
console.log(`Current list size is: ${list.size}`);
console.log(`Current list:`);
list.print();

console.log(
  "===============================DELETE NODE AT THE HEAD=========================="
);

list.headDelete();
console.log(`Current list:`);
list.print();

console.log(
  "===============================DELETE NODE AT THE TAIL=========================="
);

list.tailDelete();
console.log(`Current list:`);
list.print();
