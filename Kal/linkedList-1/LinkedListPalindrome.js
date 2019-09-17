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
    //create new Node
    const newNode = new Node(data);
    //if head is null set head to new node
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

  palindrome() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    slow = reverse(slow);
        let pointer = slow;
        let counter = 0;
        console.log('*************');
        while (pointer !== null) {
          console.log(`${counter} : ${pointer.data}`);
          pointer = pointer.next;
          counter++;
        }
    fast = this.head;

    while (slow != null) {
      if (slow.data != fast.data) {
        return false;
      }
      slow = slow.next;
      fast = fast.next;
    }
    return true;
  }

  // reverse(slow) {
  //   let previous = null;
  //   let current = slow;

  //   while (current !== null) {
  //     let nextNode = current.next;
  //     current.next = previous;
  //     previous = current;
  //     current = nextNode;
  //   }
  //   return previous; // is the last pointer in the list
  // }

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

function reverse(slow) {
  let previous = null;
  let current = slow;

  while (current !== null) {
    let nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }
  return previous; // is the last pointer in the list
}

let list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(3)
list.add(2)
list.add(1)
list.print();
console.log(list.palindrome());