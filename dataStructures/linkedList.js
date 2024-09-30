class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // pointer to the first node
    this.size = 0;
  }

  // check if list is empty
  isEmpty = () => {
    return this.size === 0;
  };

  // get the current size of the list
  getSize = () => {
    return this.size;
  };

  // add new node at the beginning of the list
  prepend = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  };

  // add a new node at the end of the list
  append = (value) => {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prevNode = this.head;

      while (prevNode.next) {
        prevNode = prevNode.next;
      }

      prevNode.next = newNode;
    }

    this.size += 1;
  };

  // insert new node at given index
  insert = (value, index) => {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }

      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.size += 1;
    }
  };

  // remove node from list given its index
  deleteByIndex = (index) => {
    if (index < 0 || index > this.size) {
      return null;
    }

    let nodeToRemove;
    if (index === 0) {
      nodeToRemove = this.head;
      this.head = nodeToRemove.next;
    } else {
      let prevNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }

      nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
    }

    this.size -= 1;
    return nodeToRemove;
  };

  // remove node from list given its value
  deleteByValue = (value) => {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size -= 1;
      return value;
    } else {
      let prevNode = this.head;

      while (prevNode.next && prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next) {
        let nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.size -= 1;
        return value;
      }
      return null;
    }
  };

  // find node by value
  find = (value) => {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return 1;
      }
      currentNode = currentNode.next;
      i++;
    }

    return -1;
  };

  // Reverse a link list
  reverse = () => {
    if (this.isEmpty()) {
      return "Nothing to reverse";
    }

    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  };

  // print nodes
  print = () => {
    if (this.isEmpty()) {
      console.log("Nothing to print");
    } else {
      let currentNode = this.head;
      let nodes = "";
      while (currentNode) {
        nodes += `${currentNode.value} `;
        currentNode = currentNode.next;
      }

      console.log(nodes);
    }
  };
}

const list = new LinkedList();
console.log(
  "=============================== PREPENDING ============================"
);
console.log("List is empty: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);

console.log("List is empty: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();

console.log(
  "=============================== REVERSING THE LIST ============================"
);
list.reverse();
list.print();

console.log(
  "=============================== APPENDING ============================"
);
console.log("List is empty: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("List is empty: ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print();

console.log(
  "=============================== INSERTING ============================"
);

console.log("Inserting 50 at the 4 index");
list.insert(50, 4);
list.print();
console.log("List size: ", list.getSize());
console.log(" ");
console.log("Inserting 60 at the beginning");
list.insert(60, 0);
list.print();
console.log("List size: ", list.getSize());

console.log(
  "=============================== DELETING ============================"
);

console.log("Deleting node at the 4 index");
list.deleteByIndex(5);
list.print();
console.log("List size: ", list.getSize());
console.log(" ");
console.log("Deleting node at the beginning");
list.deleteByIndex(0);
list.print();
console.log("List size: ", list.getSize());

console.log(
  "=============================== FIND NODE BY VALUE ============================"
);

console.log("Find node with value 30");
console.log(list.find(30));
console.log(" ");
console.log("Find node with value 60");
console.log(list.find(60));
