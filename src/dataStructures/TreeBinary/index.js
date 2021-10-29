class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	add(value) {
		if (this.value === null) {
			this.value = value;
			return;
		}

		if (this.value < value) {
			if (this.right) {
				this.right.add(value);
				return;
			}

			const newNode = new Node(value);
			this.right = newNode;
			return;
		}

		if (this.value > value) {
			if (this.left) {
				this.left.add(value);
				return;
			}

			const newNode = new Node(value);
			this.left = newNode;
			return;
		}
	}

	find(value) {
		if (this.value === value) {
			return this;
		}

		if (this.value < value && this.right) {
			return this.right.find(value);
		}

		if (this.value > value && this.left) {
			return this.left.find(value);
		}
	}

	contains(value) {
		return !!this.find(value);
	}
}

class TreeBinary {
	constructor() {
		this.root = new Node(null);
	}

	add(value) {
		this.root.add(value);
	}

	find(value) {
		return this.root.find(value);
	}

	contains(value) {
		return this.root.contains(value);
	}
}

module.exports = TreeBinary;
