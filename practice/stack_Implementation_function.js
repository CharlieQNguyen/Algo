class Node{
    constructor(value, next){
         this.value = value;
         this.next = next;
    }
};

class Stack {
    constructor(){
        this.top = null;
    }
    
    push(value){
        var new_node = new Node(value); 
        console.log("new node created")
        if(this.top){                   //if top already exist
            new_node.next = this.top;
            this.top = new_node;
        } else {                        //if top doesn't exist
            this.top = new_node;
        }
    }

    print(){
        console.log("I'm going to print");
        var pointer = this.top;
        console.log("This is the value of my pointer  "+ pointer.value)
        while(pointer){
            console.log("I'm in the while loop");
            console.log(pointer.value);
            pointer = pointer.next;
        }
       
    }
}

var stack1 = new Stack;
stack1.push(5);
stack1.push(4);
stack1.push(3);
stack1.push(2);
stack1.print();
console.log("the top of the stack is" + stack1.top.value);