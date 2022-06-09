const printTree = require('./print');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    
    if (!this.root) {
      return this.root = newNode;
    }
    
    let currentNode = this.root;

    while(true) {
      const nextNodeDir = (currentNode.value >= value) ? 'L' : 'R';
      const nextNode = (nextNodeDir === 'L') ? currentNode.left : currentNode.right;

      if (!nextNode && nextNodeDir === 'L') {
        return currentNode.left = newNode;

      } else if (!nextNode && nextNodeDir === 'R') {
        return currentNode.right = newNode;

      } else {
        currentNode = nextNode;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = (currentNode.value >= value) ? currentNode.left : currentNode.right;
    }

    return false;
  }

  remove(value) {
    if (!this.root) return false;

    let childDirection;
    let parentNode = null;
    let currentNode = this.root;

    const replaceDeleted = (replacementNode) => {
      if (!parentNode) {
        this.root = replacementNode;
      } else if (childDirection === 'L') {
        parentNode.left = replacementNode;
      } else {
        parentNode.right = replacementNode;
      }
    };

    // traverse to node that should be deleted if it exists
    while(true) {
      if (!currentNode) return false;
      if (currentNode.value === value) break;
      
      childDirection = (currentNode.value >= value) ? 'L' : 'R';
      parentNode = currentNode;
      currentNode = (childDirection === 'L') ? currentNode.left : currentNode.right;
    }

    if (!currentNode.right) {
      handleNoRight();
    } else if (!currentNode.right.left) {
      handleRightWithoutLeft();
    } else {
      handleRightWithLeft();
    }

    return currentNode.value;

    // Helpers for Handling deletion and replacements based on tree structure 
    
    function handleNoRight() {
      const replacementNode = currentNode.left;
      replaceDeleted(replacementNode);
    }

    function handleRightWithoutLeft () {
      const replacementNode = currentNode.right;
      replacementNode.left = currentNode.left;
      replaceDeleted(replacementNode);
    }

    function handleRightWithLeft () {
      const deletedRightChild = currentNode.right;
      let replacementNode = deletedRightChild.left;
      
      // traverse until replacementNode is the left-most child of the deletedNode's right child
      while (replacementNode.left) {
        replacementNode = replacementNode.left;
      }

      deletedRightChild.left = replacementNode.right;
      replacementNode.left = currentNode.left;
      replacementNode.right = deletedRightChild;
      replaceDeleted(replacementNode);
    }
  }
}

// driver code 
const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(170);
tree.insert(18);
tree.insert(19);
tree.insert(100);
tree.insert(110);
tree.insert(1000);

console.log(tree.lookup(6));
console.log(tree.lookup(89123));
console.log(tree.remove(10));

printTree(tree.root);