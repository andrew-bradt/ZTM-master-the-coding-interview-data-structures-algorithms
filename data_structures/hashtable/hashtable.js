console.clear();

class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }

  // arbitary hashing function - returns val between 0 and this.data.length - 1
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    const bucket = this.data[address];

    for (const entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (const entry of bucket) {
        if (entry[0] === key) return entry[1];
      }
    }

    return undefined;
  }

  keys() {
    const keys = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const entry of bucket) {
          keys.push(entry[0]);
        }
      }
    }

    return keys;
  }

}

const hash = new HashTable(2);

hash.set('grapes', 50);
hash.set('apples', 51);
hash.set('apples', 3);
hash.set('kiwi', 100);

console.log(hash.keys());
console.log(hash.data);