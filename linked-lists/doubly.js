console.clear();

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head.prev = newNode;

    this.head = newNode;
    this.length++;
  }

  shift() {

  }

  append(val) {
    const newNode = new Node(val);

    newNode.prev = this.tail;
    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  pop() {

  }

  print() {
    const vals = [];
    let currentNode = this.head;

    while(currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(vals);
  }

  printReverse() {
    const vals = [];
    let currentNode = this.tail;

    while (currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.prev;
    }

    console.log(vals);
  }

  insert(val, index) {

  }

  delete(index) {

  }

  _traverse(index) {
    const numStepsFromTail = this.length - 1 - index;
    const numStepsFromHead = index;

    return (numStepsFromHead <= numStepsFromTail) 
      ? this._traverseFromHead(index) 
      : this._traverseFromTail(index);
  }
  
  _traverseFromHead(index) {
    let currentNode = this.head;
    let i = 0;

    while(i !== index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  _traverseFromTail(index) {
    let currentNode = this.tail;
    let i = this.length - 1;

    while(i !== index) {
      currentNode = currentNode.prev;
      i--;
    }

    return currentNode;
  }
}

const list = new DoublyLinkedList(12);
list.prepend(82);
list.prepend(800);
list.append(94);
list.append(1820);

// 800, 82, 12, 94, 1820
list.print();
