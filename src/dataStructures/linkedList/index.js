class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) {
			this.tail.next = newElement;
		}
		if (!this.head) {
			this.head = newElement;
		}
		this.tail = newElement;
	}

	prepend(value) {
		const newElement = { value: value, next: this.head };
		this.head = newElement;

		if (!this.tail) {
			this.tail = newElement;
		}
	}

	insertAfter(value, afterValue) {
		const existingElement = this.find(afterValue);

		if (existingElement) {
			const newElement = { value: value, next: existingElement.next };
			existingElement.next = newElement;
		}
	}

	insertBefore(value, beforeValue) {
		const existingElement = this.find(beforeValue);
		let currentElement = this.head;

		if (!this.head) {
			return null;
		}

		const newElement = { value: value, next: existingElement };

		while (currentElement) {
			if (currentElement.next.value === beforeValue) {
				currentElement.next = newElement;
				return;
			}
			currentElement = currentElement.next;
		}
	}

	find(value) {
		if (!this.head) {
			return null;
		}

		let currentElement = this.head;

		while (currentElement) {
			if (currentElement.value === value) {
				return currentElement;
			}
			currentElement = currentElement.next;
		}
		return currentElement;
	}

	getLast() {
		let lastNode = this.head;

		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}

	getFirst() {
		return this.head;
	}

	toArray() {
		const elements = [];
		let currentElement = this.head;

		while (currentElement) {
			elements.push(currentElement);
			currentElement = currentElement.next;
		}
		return elements;
	}

	fromArray(data) {
		data.forEach(item => this.append(item));
		return this;
	}

	reverse() {
		let currentElement = this.head;
		let prevElement = null;
		let nextElement = null;

		while (currentElement) {
			nextElement = currentElement.next;
			currentElement.next = prevElement;
			prevElement = currentElement;
			currentElement = nextElement;
		}
		this.tail = this.head;
		this.head = prevElement;
		return this;
	}

	delete(value) {
		if (!this.head) {
			return null;
		}

		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		let currentElement = this.head;

		while (currentElement.next) {
			if (currentElement.next.value === value) {
				currentElement.next = currentElement.next.next;
			} else {
				currentElement = currentElement.next;
			}
		}

		if (this.tail.value === value) {
			this.tail = currentElement;
		}
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}
		return this;
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}
		return this;
	}

	clear() {
		this.head = null;
		this.tail = null;
	}

	size() {
		let count = 0;
		let node = this.head;

		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
}

module.exports = { LinkedList };
