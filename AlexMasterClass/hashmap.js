class HashMap {
  constructor() {
    this.arrays = new Array();

    for (let i = 0; i < 8; i++) {
      this.arrays.push(new Array()); // imagine these arrays are linkedList
    }
  }
  // hash meant to get the index from the key
  hash(key) {
    return key.charCodeAt(0) & 0b111; //ensure that i have ONLY the last 3 bits from the character code
  }

  get(key) {
    let index = this.hash(key); // will give bucket index
    let bucket = this.arrays[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        return bucket[i].value;
      }
    }
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.arrays[index];
    //updating the hash value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        bucket[i].value = value;
        return;
      }
    }

    bucket.push(new HashMapEntry(key, value));
  }

  print() {
    for (let i = 0; i < this.arrays.length; i++) {
      console.log(i + " : ");
      for (let j = 0; j < this.arrays[i].length; j++) {
        console.log(
          "    " + this.arrays[i][j].key + "    " + this.arrays[i][j].value
        );
      }
    }
  }
}

class HashMapEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

hash1 = new HashMap();

//hash1.print()

hash1.set("alex", 200);
hash1.set("alex", 201);
hash1.set("alex2", 400);
hash1.set("charlie", 300);
hash1.print();

console.log(hash1.get("alex"));
console.log(hash1.get("alex2"));
console.log(hash1.get("charlie"));
