const linkedListModule = require('./dataStructures/linkedList');
const doubleLinkedListModule = require('./dataStructures/doubleLinkedList');

const list = new doubleLinkedListModule.DoubleLinkedList();

list.append(2);
list.append(5);
list.append(231);
list.append(33);

// list.append('mohammadareza');

// const array = ['reza', 2, false, 'ahmad', { name: 'mohammadreza' }];

// console.log(list.fromArray(array));
// console.log(list.toArray());

// list.delete(2);

// list.insertAfter('behzad', 2);
// list.insertBefore('before', 5);

// list.insertBefore('baforeValue', 5);

// const arr = list.toArray();
const reverse = list.reverse();
// console.log(reverse.toArray());

console.log(reverse.toArray());
// console.log(arr.reverse());
