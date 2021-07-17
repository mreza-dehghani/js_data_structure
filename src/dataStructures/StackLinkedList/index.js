const LinkedList = require('../LinkedList');

class StackLinkedList {
	constructor() {
		this.items = new LinkedList();
	}

	push(value) {
		this.items.prepend(value);
	}

	pop() {
		return this.items.deleteHead();
	}

	toArray() {
		return this.items.toArray();
	}
}

module.exports = StackLinkedList;
