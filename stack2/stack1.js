class Node {
    constructor (data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    //add function
    add(data) {
        let newNode = new Node(data, this.top);
        this.top = newNode;
    }

    removeTop(){
        let temp = this.top.data;
        this.top = this.top.next;
        console.log(temp)
        return temp;
    }

    print() {
        let pointer = this.top;

        while(pointer) {
            console.log(pointer.data)
            pointer = pointer.next;
        }
    }
}

stack = new Stack;

stack.add(1)
stack.add(2)
stack.add(3)

stack.removeTop()

stack.print()