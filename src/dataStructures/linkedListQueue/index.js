const LinkedList = require('../linkedList');

class QueueLinkedList {
	constructor() {
		this.list = new LinkedList();
	}

	enqueue(value) {
		this.list.append(value);
	}

	dequeue() {
		return this.list.deleteHead();
	}

	toArray() {
		return this.list.toArray();
	}
}

module.exports = QueueLinkedList;
