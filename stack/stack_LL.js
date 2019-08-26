class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    // push data onto the stack
    push(data) {
        // create newNode to add to stack
        let newNode = new Node(data);
        // newNode next points to the head
        newNode.next = this.head;
        // move head to the newNode
        this.head = newNode;
    }
    // pop the top node off the stack LIFO = Last In First Out
    pop() {
        // if there is nothing in the stack
        if(this.head === null) {
            return;
        }
        // normal case
        //create temp call toReturn
        let toReturn = this.head;
        // move head to the next node
        this.head = this.head.next;
        // toReturn pointer points to null to disconnect
        toReturn.next = null;
        // return the node that was deleted stored in toReturn variable 
        return toReturn.data;
    }

    print() {
        let pointer = this.head;

        while(pointer) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
    }
}

stack1 = new Stack;
stack1.push(100)
stack1.push(200)
stack1.push(300)
console.log("Popping the stack: " + stack1.pop());
stack1.print();