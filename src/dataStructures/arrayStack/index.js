class ArrayStack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
	}

	pop() {
		return this.items.pop();
	}

	toArray() {
		return this.items;
	}
}

module.exports = ArrayStack;
