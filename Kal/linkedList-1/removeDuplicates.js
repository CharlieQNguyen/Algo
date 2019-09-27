class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // create a new Node
    const newNode = new Node(data);
    // if the head is null set head to new node
    if (this.head == null) {
      this.head = newNode;
      this.size++;
      return;
    }
    // Add to the end of the list since head isn't null aka list isn't empty
    // Create a pointer that points at the beginning of the list
    let pointer = this.head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
    this.size++;
  }

  // addDatas([1,2,3]); without spread (...)
  // addDatas(1,2,3); with spread
  addDatas(...datas) {
    for (let data of datas) {
      this.add(data);
    }
  }

  removeDup() {
    let existingValues = {};
    if (this.head === null) {
      return;
    }
    let previous = null;
    let current = this.head;
    while (current !== null) {
      if (!existingValues[current.data]) {
        existingValues[current.data] = true;
        previous = current;
        current = current.next;
      } else {
        //encounter dup, time to remove
        current = current.next;
        previous.next = current;
      }
    }
  }

  print() {
    let pointer = this.head;
    let counter = 0;

    while (pointer !== null) {
      console.log(`${counter} : ${pointer.data}`);
      pointer = pointer.next;
      counter++;
    }
  }
}

let list = new LinkedList();
list.addDatas(1,1,2,2);
list.print();

function removeDup(list) {
  let existingValues = {};
  if (list.head == null) {
    return;
  }
  let previous = null;
  let current = list.head;
  while (current) {
    while (existingValues[current.data]) {
      current = current.next;
      previous.next = current;
    }
    existingValues[current.data] = true;
    previous = current;
    current = current.next;
  }
}

function removeDup1(list) {
  let existingValues = {};
  if (list.head === null) {
    return;
  }
  let previous = null;
  let current = list.head;
  while (current !== null) {
    if (!existingValues[current.data]) {
      existingValues[current.data] = true;
      previous = current;
      current = current.next;
    } else {
      //encounter dup, time to remove
      current = current.next;
      previous.next = current;
    }
  }
}

function removeDup2(list) {
  let existingValues = {};
  if (list.head === null) {
    return;
  }
  let previous = null;
  let current = list.head;
  while (current !== null) {
    if (existingValues[current.data]) {
      //encounter dup, time to remove
      current = current.next;
      previous.next = current;
    } else {
      existingValues[current.data] = true;
      previous = current;
      current = current.next;
    }
  }
}
