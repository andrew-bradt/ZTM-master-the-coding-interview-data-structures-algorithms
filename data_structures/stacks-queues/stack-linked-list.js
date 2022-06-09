console.clear();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;

    this.top = newNode;
    this.length++;

    return this.length;
  }

  pop() {
    if (!this.top) return null;

    const deletedNode = this.top;
    this.top = deletedNode.next;
    this.length--;

    return deletedNode.val;
  }

  peek() {
    return (this.top) ? this.top.val : null;
  }

  isEmpty() {
    return !this.length;
  }
}

// driver code
const stack = new Stack();
stack.push(12);
stack.push(18);
stack.push(92);

console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.peek());

stack.pop();
stack.pop();

console.log(stack.peek());
console.log(stack.isEmpty());