remove(value)

define parent as null
define currentNode as this.root

traverse to node to delete
  - while true:
    - if currentNode is value to delete, break loop
    - if no currentNode, return false
    - assign parent to currentNode
    - assign currentNode to left or right



If Node has no leaves
  - remove node

If node is right child and has no left children
  - connect removed nodes right child to right of deleted node's parent

if node is a left child that has no right children
  - connect removed nodes left child to left of deleted node's parent

if node has both children and its right child has a left child:
  - store parent
  - store deleted
  - traverse

- RIGHT CHILD WITH A LEFT CHILD
  - replacement node is deleted.right.left
  - replacement node left child is deleted node left child
  - replacement node right child is parent(deleted.right)
  - make parent l/r point to replacement