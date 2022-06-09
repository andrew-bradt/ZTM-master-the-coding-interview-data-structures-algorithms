const traverse = (node) => {
  const tree = {value: node.value};
  tree.left = (node.left) ? traverse(node.left) : null;
  tree.right = (node.right) ? traverse(node.right) : null;
  return tree;
};

const printTree = (node) => console.log(JSON.stringify(traverse(node)));
module.exports = printTree;