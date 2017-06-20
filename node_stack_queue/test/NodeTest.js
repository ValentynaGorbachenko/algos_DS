"use strict";

const Node = require("../Node"),
	should = require("chai").should(),
	expect = require("chai").expect;

var node;

describe("Node", ()=>{
	describe("Properties", ()=>{
		beforeEach(()=>{
			node = new Node("value of the data property");
		});
		it('Should have own properties - data, left and right', ()=>{
			expect(node).to.have.property("data");
			expect(node).to.have.property("left");
			expect(node).to.have.property("right");
		});
	});
	describe("Methods", ()=>{
		
	});
});


/*
let q = new Queue();
console.log(q.size());
q.enqueue("1");
q.enqueue("2");
console.log(q);
q.dequeue();
console.log(q);
*/
/*
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
*/