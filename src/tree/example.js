const Node = require("./index");
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
