console.clear();

class Stack {
  constructor() {
    this._data = [];
  }

  push(val) {
    this._data.push(val);
    return this._data.length;
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }

  isEmpty() {
    return this._data.length === 0;
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
