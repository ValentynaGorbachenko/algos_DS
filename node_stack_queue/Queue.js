"use strict";
class Queue{
  constructor(queue = []){
    this.queue = queue;
  }
  isEmpty(){
    return this.queue.length === 0;
  }
  enqueue(item){
    this.queue.unshift(item);
  }
  dequeue(){
    if (!this.isEmpty()){
      return this.queue.pop();
    }
  }
  size(){
    return this.queue.length;
  }
}
module.exports = Queue;