console.clear();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this.length;
  }

  dequeue() {
    if (!this.first) return null;

    const deletedNode = this.first;
    this.first = deletedNode.next;
    this.length--;

    return deletedNode.val;
  }

  isEmpty() {
    return !this.length;
  }
}

// driver code
const queue = new Queue();

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());

console.log(queue.enqueue(18));
console.log(queue.enqueue(88));
console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());

