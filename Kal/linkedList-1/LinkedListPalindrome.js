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
    if(this.head == null) {
        this.head = newNode;
        this.size++;
        return;
    }
    // Add to the end of the list since head isn't null aka list isn't empty
    // Create a pointer that points at the beginning of the list
    let pointer = this.head;
    while(pointer.next !== null) {
        pointer = pointer.next;
    }
    pointer.next = newNode;
    this.size++;
  }

  palindrome(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    }
    slow = reverse(slow);
    fast = this.head;
    
    while(slow != null) {
        if(slow.data != null) {
        return false;
        }
        slow = slow.next;
        fast = fast.next
    }
    return true;
  }

  print() {
    let pointer = this.head;
    let counter = 0;

    while(pointer !== null) {
    console.log(`${counter} : ${pointer.data}`);
    pointer = pointer.next;
    counter++;
    }
  }
}

let list = new LinkedList();
list.add(100)
list.add(200)
list.add(300)
list.print();