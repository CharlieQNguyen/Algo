// Group implementation 

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

    addTo(data) {
        let newNode = new Node(data) // created new node

        newNode.next = this.top; // new node points to the top

        this.top = newNode; // top points to new node
    }

    removeTop() {
        let temp = this.top.data;
        this.top = this.top.next;
        console.log(temp);
        return temp;
    }

    print() {
        let pointer = this.top

        while(pointer) {
            console.log(pointer.data)
            pointer = pointer.next;
        }
    }
}

stack1 = new Stack

stack1.addTo(1)
stack1.addTo(2)
stack1.addTo(3)


stack1.removeTop()
stack1.print()