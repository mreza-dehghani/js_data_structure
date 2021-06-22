class DoublyLinkedListNode {
	constructor(value, next = null, previous = null) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = new DoublyLinkedListNode(value);

		if (!this.head) {
			this.head = newElement;
			this.tail = newElement;
		} else {
			this.tail.next = newElement;
			newElement.previous = this.tail;
			this.tail = newElement;
		}
		return this;
	}

	prepend(value) {
		const newElement = new DoublyLinkedListNode(value, this.head);

		if (this.head) {
			this.head.previous = newElement;
		}

		this.head = newElement;

		if (!this.tail) {
			this.tail = newElement;
		}

		return this;
	}

	insertAfter(value, afterValue) {
		const exitingElement = this.find(afterValue);

		if (exitingElement) {
			const newElement = new DoublyLinkedListNode(value, exitingElement.next, exitingElement);

			exitingElement.next = newElement;
		}
	}

	// insertBefore(value, beforeValue) {
	// 	const exitingElement = this.find(beforeValue);
	// 	const newElement = new DoublyLinkedListNode(value);
	//
	// 	newElement.previous = exitingElement.previous;
	// 	exitingElement.previous = newElement;
	// 	newElement.next = exitingElement;
	//
	// 	if (!newElement.previous) {
	// 		newElement.previous.next = newElement;
	// 	} else {
	// 		this.head = newElement;
	// 	}
	//
	// 	return newElement;
	// }

	// insertBefore(value, beforeValue) {
	// 	const exitingElement = this.find(beforeValue);
	// 	const newElement = new DoublyLinkedListNode(value, exitingElement.next, exitingElement.previous);
	//
	// 	if (!this.head) {
	// 		return null;
	// 	}
	//
	// 	if (exitingElement) {
	// 		if (exitingElement === this.head) {
	// 			this.head.previous = newElement;
	// 			newElement.next = this.head;
	// 			this.head = newElement;
	// 		} else if (exitingElement === this.tail) {
	// 			newElement.previous = this.tail.previous;
	// 			newElement.next = this.tail;
	// 			this.head.previous = newElement;
	// 		} else {
	// 			newElement.previous = exitingElement.previous;
	// 			newElement.next = exitingElement;
	// 			exitingElement.previous = newElement;
	// 		}
	//
	// 		return this;
	// 	}
	// }

	// insertBefore(value, beforeValue) {
	// 	const exitingElement = this.find(beforeValue);
	// 	let currentElement = this.head;
	//
	// 	if (!this.head) {
	// 		return null;
	// 	}
	//
	// 	const newElement = new DoublyLinkedListNode(value, exitingElement, exitingElement.previous);
	//
	// 	if (this.head === exitingElement) {
	// 		this.head = newElement;
	// 		this.head.next = exitingElement;
	// 	} else {
	// 		while (currentElement) {
	// 			if (currentElement.next.value === beforeValue) {
	// 				currentElement.next = newElement;
	// 				return;
	// 			}
	// 			currentElement = currentElement.next;
	// 		}
	// 	}
	// }

	insertBefore(value, beforeValue) {}

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
		let lastElement = this.head;

		if (lastElement) {
			while (lastElement) {
				lastElement = lastElement.next;
			}
		}

		return lastElement;
	}

	getFirst() {
		return this.head;
	}

	delete(value) {
		if (!this.head) {
			return null;
		}

		let deletedNode = null;
		let currentElement = this.head;

		while (currentElement) {
			if (currentElement.value === value) {
				deletedNode = currentElement;

				if (this.head === deletedNode) {
					this.head = deletedNode.next;

					if (this.head) {
						this.head.previous = null;
					}

					if (this.tail === deletedNode) {
						this.tail = null;
					}
				} else if (this.tail === deletedNode) {
					this.tail = deletedNode.previous;
					this.tail.next = null;
				} else {
					const previousNode = deletedNode.previous;
					const nextNode = deletedNode.next;

					previousNode.next = nextNode;
					nextNode.previous = previousNode;
				}
			}
			currentElement = currentElement.next;
		}
		return deletedNode;
	}

	deleteTail() {
		if (!this.tail) {
			return null;
		}

		if (this.head === this.tail) {
			const deletedTail = this.tail;
			this.head = null;
			this.tail = null;

			return deletedTail;
		}

		const deletedTail = this.tail;

		this.tail = this.tail.previous;
		this.tail.next = null;

		return deletedTail;
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		const deletedHead = this.head;

		if (this.tail.next) {
			this.head = this.head.next;
			this.head.previous = null;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedHead;
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

	clear() {
		this.head = null;
		this.tail = null;
	}

	size() {
		let count = 0;
		let currentElement = this.head;

		while (currentElement) {
			count++;
			currentElement = currentElement.next;
		}

		return count;
	}

	reverse() {
		let currentElement = this.head;
		let prevElement = null;
		let nextElement = null;

		while (currentElement) {
			prevElement = currentElement.previous;
			nextElement = currentElement.next;

			currentElement.next = prevElement;
			currentElement.previous = nextElement;

			prevElement = currentElement;
			currentElement = nextElement;
		}

		this.tail = this.head;
		this.head = prevElement;

		return this;
	}
}

module.exports = { DoubleLinkedList };
