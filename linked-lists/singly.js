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

  insert(val, index) {
    if (index <= 0) return this.prepend(val);
    if (index >= this.length - 1) return this.append(val);

    const preInsertPointer = this._traverse(index - 1);
    const postInsertPointer = preInsertPointer.next;
    const newNode = new Node(val);
    
    newNode.next = postInsertPointer;
    preInsertPointer.next = newNode;
    this.length++;
  }

  print() {
    const vals = [];
    let currentNode = this.head;

    while (currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(vals);
  }

  _traverse(index) {
    let currentNode = this.head;
    let i = 0;
    
    while(i !== index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

}

// Driver Code
const list = new SinglyLinkedList(5);

list.prepend(10);
list.append(16);
list.insert(100, 0);
list.insert(50, 100);
list.insert(32, 2);
list.insert('andrew', 3);

// 100, 10, 32, andrew, 5, 16, 50

list.print();

