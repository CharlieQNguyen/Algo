
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

  // Add to the front of the linked list
  addToFront(data) {
    const newNode = new Node(data);   //create new node
    newNode.next = this.head;         //new node next points to head
    this.head = newNode;
    this.size++;
  }

  // Normal add which adds to the end of the linked list
  add(data) {
    const newNode = new Node(data);
    // Add To List if head is null aka list is empty
    if (this.head == null) {
      this.head = newNode;
      this.size++;
      return;
    }
    // Add to the end of the list since head isn't null aka list isn't empty
    // Create a pointer that points at the beginning of the list
    let pointer = this.head;
    // Loop pointer to the end of the list
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    // Set the end of the list to the newest node
    pointer.next = newNode;
    this.size++;
  }

  // Retrieve the data contained in a specific index
  getFromIndex(index) {
    const searchNode = this.getNodeAtIndex(index);

    if(searchNode !== null){
      return searchNode.data;
    }

    return null;
  }

  // Retrieves a specific node
  getNodeAtIndex(index) {
      // If the index greater the size-1
      // Or if the index is a negative number
      if(index > this.size-1 || index < 0) {
          return null;
      }
      // Get the data and return it using count and current pointer
      let currentIndex = 0;
      let currentNode = this.head;
      
      while(currentNode && currentIndex < index) {
          currentNode = currentNode.next;
          currentIndex++;
      }
      
    return currentNode;
  }

  // Inserts a node at a specific index
  addAtIndex(data, index) {
      // Index is too small, adding to the front of the list
      if( index <= 0){
         this.addToFront(data);
       }

     // Index is too big, adding to the end of the list
      if ( index >= this.size){
         this.add(data);
      }

    // Valid Index requested, retrieve one node prior to requested index
    let previousNode = this.getNodeAtIndex(index-1);

    //stopping at previous index, currentNode is the node prior to the insertion point
    const newNode = new Node(data);     //create new node

    newNode.next = previousNode.next;   //setting newNode pointer to previous node

    previousNode.next = newNode;        //previous next points to new node

  }

  // Removes a specific index from a linked list
  remove(data) {
    let current = this.head

    // Deleting the head node
    if(current.data === data){
      const newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      return true;
    }

    while(current){
        if(current.next.data === data) {
            //delete node
            const newNext = current.next.next;
            current.next.next = null;
            current.next = newNext;

            return true
        }
        current = current.next;
    }
    return false;
  }

  // Removes node at specific index in the linked list
  removeAtIndex(index) {
    if(index < 0 || index > this.size-1){
      return false;
    }
    
    if(index === 0){
      const newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      return true;
    }
    const previousNode = this.getNodeAtIndex(index-1);

    const newNext = previousNode.next.next;
    previousNode.next.next = null;
    previousNode.next = newNext;
    return true;
  }

  // Reverses the Linked list in place
  reverse() {
    // declare pointers
    let previous = null;
    let current = this.head;
    // use while loop to loop through the list while head exist to
    // switch pointers
    while(current !== null) {
      // Capturing our next node to work on
      const nextNode = current.next;
      // Reversing the current node point at the one before it
      current.next = previous;
      // Moving our pointers for the next iteration of the loop
      previous = current;
      current = nextNode;
    }

    // Setting the new head of the list
    this.head = previous;

    return this.head;
  }

  reverseRecursive(previous = null, current = this.head){
    if(current == null){
      return previous;
    }

    // Goto the end of the list
    const newHead = this.reverseRecursive(current, current.next);

    current.next = previous;
    this.head = newHead;
    return newHead;
  }

  // 1->2->3->4->
  // <-1<-2<-3<-4

  print() {
    /*
        Starting at the beginning of the list,
        We iterate thorugh the list and print each node data
        */

    // Create a pointer that points to the first node in the list
    let pointer = this.head;
    let counter = 0;
    // While a node exist, print each node, then move to the next node
    while (pointer !== null) {
      console.log(`${counter} : ${pointer.data}`);
      pointer = pointer.next;
      counter++;
    }
  }

  printRecursive(node = this.head, counter = 0){
    // Stop at last node
    if(node == null){
      return;
    }

    // Do function call first to get to the end of the list
    //Print the node
    console.log(`${counter} : ${node.data}`);
    
    // Aka iterator 
    this.printRecursive(node.next, counter + 1);
  
  }
}


let list = new LinkedList();
list.add(100);
list.add(500);
list.add(300);
list.print();
// list.addToFront(400);
// list.addAtIndex(2000,2);
// const oldHead = list.head;
// list.head = list.head.next;
// list.addToFront("Front");
// // Fixing the list
// oldHead.next = list.head;
// list.head = oldHead;
// list.remove(100);
// list.reverseRecursive();
// list.printRecursive();


// class Data1{
//   constructor(num){
//     this.num = num;
//   }
//   increase(amount){
//     if(amount > 0){
//       this.num += amount;
//     }
//   }
//   decrease(amount){
//     if(amount > 0){
//       this.num -= amount;
//     }
//   }
// }

// class DataManipulator{

//   constructor(){
//     // private
//     this.data1 = new Data1(1000);
//   }

//   changePositve(){
//     this.data1.increase(100);
//   }
// }

// let dataM = new DataManipulator();
// dataM.changePositve();

// console.log(dataM.data1.num);
