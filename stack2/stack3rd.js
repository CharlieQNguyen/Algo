class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    //add data to the top of the stack
    add(data) {
        // create new node
        let newNode = new Node(data);
        // new node points to the top
        newNode.next = this.top;
        // top points to the new Node
        this.top = newNode;
    }

    removeTop() {
        
    }

    print() {
        let pointer = this.top;
        while(pointer) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
    }
}

stack = new Stack;

stack.add(100);
stack.add(200);
stack.add(300);

stack.print();