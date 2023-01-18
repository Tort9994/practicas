class ThreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinarySeachTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new ThreeNode(value, null, null);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let isFound = false;
      while (!isFound) {
        if (value === currentNode.value) {
          isFound = true;
          return;
        }
        if (value !== currentNode.value) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.left;
            }
          }
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  // a recursive function to insert a new value in binary search tree

  removeNode(current, value) {
    // base case, if the tree is empty

    if (current === null) return current;

    // when value is the same as current's value, this is the node to be deleted

    if (value === current.value) {
      // for case 1 and 2, node without child or with one child

      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        /// node with two children, get the inorder successor,
        //smallest in the right subtree

        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;

        /// delete the inorder successor

        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }

      // recur down the tree
    } else if (value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  /// helper function to find the smallest node

  kthSmallestNode(node) {
    while (!node.left === null) node = node.left;

    return node;
  }
}
