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

  append(val) {
    const newNode = new Node(val);

    newNode.prev = this.tail;
    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
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
}

const list = new DoublyLinkedList(12);
list.prepend(82);
list.prepend(800);
list.append(94);
list.append(1820);

// 800, 82, 12, 94, 1820
list.print();