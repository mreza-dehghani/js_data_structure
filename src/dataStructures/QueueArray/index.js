class QueueArray {
	constructor() {
		this.items = [];
	}

	enqueue(value) {
		this.items.unshift(value);
	}

	dequeue() {
		return this.items.pop();
	}

	toArray() {
		return this.items;
	}
}

module.exports = QueueArray;
