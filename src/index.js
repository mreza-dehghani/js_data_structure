const LinkedList = require('./dataStructures/LinkedList');
const DoubleLinkedList = require('./dataStructures/DoubleLinkedList');
const StackArray = require('./dataStructures/StackArray');
const StackLinkedList = require('./dataStructures/StackLinkedList');
const QueueArray = require('./dataStructures/QueueArray');
const QueueLinkedList = require('./dataStructures/QueueLinkedList');
const HashTable = require('./dataStructures/HashTable');

const linkedList = new LinkedList();
const doubleLinkedList = new DoubleLinkedList();
const stackArray = new StackArray();
const stackLinkedList = new StackLinkedList();
const queueArray = new QueueArray();
const queueLinkedList = new QueueLinkedList();
const hashTable = new HashTable(1000);

// const message = 'hello world';
//
// function findFirstChar1(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) {
// 				return str[i];
// 			}
// 		}
// 	}
// }
//
// function findFirstChar2(str) {
// 	const table = {};
//
// 	for (let char of str) {
// 		if (table[char]) {
// 			return char;
// 		}
//
// 		table[char] = 1;
// 	}
//
// 	return table;
// }
//
