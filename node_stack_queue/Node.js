"use strict";
const Queue = require("./Queue");
class Node{
  constructor (data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  // depth first search
  inOrder() {
    // console.log("inOrder method");
    if (this.left){
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right){
      this.right.inOrder();
    }
  }
  preOrder() {
    // console.log("preOrder method");
    console.log(this.data);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right){
      this.right.preOrder();
    }
  }
  postOrder(){
    // console.log("postOrder method");
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right){
      this.right.postOrder();
    }
    console.log(this.data);
  }
  // breadth first search
  levelOrder(){
    let q = new Queue();
    let node;
    q.enqueue(this);
    // console.log(q);
    // console.log(!q.isEmpty())
    while (!q.isEmpty()){
      node = q.dequeue();
      console.log(node.data);
      if (node.left){
        q.enqueue(node.left);
      }
      if (node.right){
        q.enqueue(node.right);
      }
    }
  }
}
module.exports = Node;