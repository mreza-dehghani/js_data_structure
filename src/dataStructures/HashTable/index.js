class HashTable {
	constructor(size) {
		this.size = size;
		this.items = Array(size).fill(null);
	}

	hash(key) {
		let hash = 0;

		for (const char of key) {
			hash += char.charCodeAt(0);
		}

		return hash % this.size;
	}

	set(key, value) {
		const keyHash = this.hash(key);

		this.items[keyHash] = value;
	}

	get(key) {
		const keyHash = this.hash(key);

		return this.items[keyHash];
	}
}

module.exports = HashTable;
