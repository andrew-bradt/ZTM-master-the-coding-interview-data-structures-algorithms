console.clear();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  append(val) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  
}

// Driver Code
const list = new SinglyLinkedList(5);
list.prepend(10);
list.append(16);

let pointer = list.head;

while(pointer) {
  console.log(pointer.val);
  pointer = pointer.next;
}
