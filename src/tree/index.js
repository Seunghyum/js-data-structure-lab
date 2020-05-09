// 트리구조
module.exports = class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value <= this.data) {
      if (this.left == null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right == null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value == this.data) {
      return true;
    } else if (value < this.data) {
      if (this.left == null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right == null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  printInOrder() {
    if (this.left != null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right != null) {
      this.right.printInOrder();
    }
  }

  printPostOrder() {
    if (this.right != null) {
      this.right.printPostOrder();
    }
    console.log(this.data);
    if (this.left != null) {
      this.left.printPostOrder();
    }
  }

  printPreOrder() {
    console.log(this.data);
    if (this.left != null) {
      this.left.printPreOrder();
    }
    if (this.right != null) {
      this.right.printPreOrder();
    }
  }
};
