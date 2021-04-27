const linkedListModule = require('./dataStructures/linkedList');

const list = new linkedListModule.LinkedList();

list.append(2);
list.append(3);
list.append('asd');
list.append('da');
list.append(false);
list.prepend(124);
// list.toArray()

const arr = [2, 3, 5, 6];
// list.delete(124);
// list.insertAfter(true, 2);
list.insertBefore('man hastam', 3);
list.insertAfter('mohammad', 'man hastam');
console.log(list.size());
console.log(list.deleteHead());
console.log(list.size());
list.append('this is test message');
console.log(list.size());
console.log(list.size());
