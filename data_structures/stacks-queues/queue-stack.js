console.clear();

class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    return (this.last.length) 
      ? this.last[this.last.length - 1]
      : this.first[0];
  }

  enqueue(val) {
    this.first.push(val);
  }

  // O(1) if Queue is empty or this.last is not empty.  O(n) is this.first is not empty and this.last is empty.
  dequeue() {
    if (!this.last.length) {
      this._moveElementsToLast();
    }

    return this.last.pop();
  }

  isEmpty() {
    return !this.first.length && !this.last.length;
  }

  _moveElementsToLast() {
    while(this.first.length) {
      const poppedVal = this.first.pop();
      this.last.push(poppedVal);
    }
  }
}

// Driver Code
const queue = new Queue();

queue.enqueue(18);
queue.enqueue(84);
queue.enqueue(92);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(18);
queue.enqueue(84);
queue.enqueue(92);
console.log(queue.dequeue());
queue.enqueue(79);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(18);
queue.enqueue(84);
queue.enqueue(92); // 18 84 92
console.log(queue.peek()); // 18
queue.dequeue(); // 84 92
queue.enqueue(79); // 84 92 79
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());