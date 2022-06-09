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
    const deletedNode = this.head;
    const newHead = deletedNode.next;
    newHead.prev = null;
    
    this.head = newHead;
    this.length--;
    return deletedNode.val;
  }

  append(val) {
    const newNode = new Node(val);

    newNode.prev = this.tail;
    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  pop() {
    const deletedNode = this.tail;
    const newTail = deletedNode.prev;
    newTail.next = null;
    
    this.tail = newTail;
    this.length--;
    return deletedNode.val;
  }

  insert(val, index) {
    if (index <= 0) return this.prepend(val);
    if (index >= this.length - 1) return this.append(val);
    
    const newNode = new Node(val);
    const preInsertPointer = this._traverse(index - 1);
    const postInsertPointer = preInsertPointer.next;

    newNode.prev = preInsertPointer;
    newNode.next = postInsertPointer;

    preInsertPointer.next = newNode;
    postInsertPointer.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index <= 0) return this.shift();
    if (index >= this.length - 1 ) return this.pop();

    const preRemovePointer = this._traverse(index - 1);
    const deletedNode = preRemovePointer.next;
    const postRemovePointer = deletedNode.next;

    preRemovePointer.next = postRemovePointer;
    postRemovePointer.prev = preRemovePointer;
    this.length--;
    return deletedNode.val;
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
list.shift();
list.pop();
list.insert('andrew', 0);
list.insert(false, 990);
list.insert('new', 2);
list.insert('some string', 4);
list.remove(0);
list.remove(5);
list.remove(1);

// 82, 12, 'some string', 94
list.print();
list.printReverse();
console.log(list.length);