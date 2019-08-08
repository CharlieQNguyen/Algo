//Stack is FIFO

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    //add function (optional don't really need)
    add(data) {         //if empty      
        this.top = new Node(data)
    }

    addTo(data) {       //if list is not empty

        let newNode = new Node(data) // create new node

        newNode.next = this.top;

        this.top = newNode;
    }

    // Delete the Top FIFO
    // if list is empty write and exception
    removeTop() {
        let temp = this.top.data; //grabs the top node
        this.top = this.top.next;
        console.log(temp);
        return temp;
    }

    print() {
        let pointer = this.top

        while(pointer) {
            console.log(pointer.data)
            pointer = pointer.next
        }
    }

}


stack1 = new Stack;

stack1.addTo(1)
stack1.addTo(2)
stack1.addTo(3)
stack1.removeTop()
//stack1.print()