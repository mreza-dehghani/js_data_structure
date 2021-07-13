const LinkedList = require('./dataStructures/linkedList');
const DoubleLinkedList = require('./dataStructures/doubleLinkedList');
const ArrayStack = require('./dataStructures/arrayStack');
const LinkedListStack = require('./dataStructures/linkedListStack');

const stack = new LinkedListStack();

stack.push('product 1');
stack.push('product 2');
stack.push('product 3');

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());
