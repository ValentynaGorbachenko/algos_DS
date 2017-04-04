"use strict";
const Node = require("../Node");
const Queue = require("../Queue");
/*
let q = new Queue();
console.log(q.size());
q.enqueue("1");
q.enqueue("2");
console.log(q);
q.dequeue();
console.log(q);
*/
let myNode = new Node("a", new Node("b"), new Node("c"));
// console.log(myNode);
console.log("in order");
myNode.inOrder();
console.log("pre order");
myNode.preOrder();
console.log("post order");
myNode.postOrder();
console.log("in level order");
myNode.levelOrder();