// 트리구조
class Node {
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
}

// 예시
const tree = new Node();
tree.insert(10);
tree.insert(20);
tree.insert(7);
tree.insert(3);
tree.insert(6);
tree.insert(13);
tree.insert(16);
tree.insert(1);
tree.insert(19);
console.log("=======Start In Order======");
tree.printInOrder();
console.log("=======End======");
console.log("=======Start Pre Order======");
tree.printPreOrder();
console.log("=======End======");
console.log("=======Start Post Order======");
tree.printPostOrder();
console.log("=======End======");

