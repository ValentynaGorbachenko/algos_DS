"use strict";
class Queue{
  constructor(length=100){
    this.size = 0;
    this.data = new Array(length);
    this.head = 0;
    this.tail = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  enqueue(item){
    // this.data.unshift(item);
    // check if queue is full
    if(this.size < this.data.length){
    	// add the value to the queue
    	this.data[tail] = item;
    	// increase the tail
    	this.tail = (tail+1)%this.data.length;
    	// update size
    	this.size++;
    } else {
    	throw "Queue is full";
    }
  }
  dequeue(){
  	// check if queue is not empty 
    if (!this.isEmpty()){
      //store the value that has to be deleted in variable
      let deleted = this.data[this.head];
      // update the head;
      this.head = (this.head+1)%this.data.length;
      // update size
      this.size--;
      return deleted;
      // return this.data.pop();
    } else {
    	throw "Queue is empty";
    }
  }
}
module.exports = Queue;