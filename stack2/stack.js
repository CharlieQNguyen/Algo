class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    console.log("PUSH");

    let node = new Node(value, this.top);
    this.top = node;

    this.print();
  }

  pop() {
    console.log("POP");
    let value = null;

    if (this.top) {
      value = this.top.value;
      this.top = this.top.nextNode;
    }

    this.print();
    return value;
  }

  print() {
    let ptr = this.top;

    while (ptr) {
      console.log(ptr.value);
      ptr = ptr.nextNode;
    }

    console.log("---");
  }
}


let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);


stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();