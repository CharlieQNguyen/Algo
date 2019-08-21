class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Enqueue adds to the tail of the queue
    enqueue(data) {
        // data to be added
        const newNode = new Node(data);

        // nothing in the list then tail and head is equal null
        if(this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        // normal case - we have something in the list
        this.tail.next = newNode;
        this.tail = newNode;
    }
    
    // Returns the first item in the list
    dequeue(){
        // if there's no node in the list
        if(this.head === null) {
            return;
        }

        // to return to point to the first node in the list
        const toReturn = this.head;

        // if there's one node in the list
        if(this.head === this.tail)
            this.tail = null;
            // head will unhook itself
        
        // normal case
         this.head = this.head.next;
         toReturn.next = null;
         return toReturn.data;
    }

    print(){
      if(this.head === null)
        return;
        
      let printer = this.head;
      let str = "";

      while(printer){
        str += printer.data;
        printer = printer.next;
        if(printer !== null)
          str += "->";
      }

      console.log(str);
    }
}

// Testing our queue

let queue1 = new Queue;

queue1.enqueue(100);
queue1.enqueue(200);
queue1.enqueue(300);

queue1.print();

const val = queue1.dequeue();
console.log(val);
queue1.print();