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

    addToFront(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    //add to the top
    
    add(data) {
        const newNode = new Node(data);
        // Add To List if head is null aka list is empty
        if(this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }
        // Add to the end of the list since head isn't null aka list isn't empty
        // Create a pointer that points at the beginning of the list
        let temp = this.head;
        // Loop pointer to the end of the list
        while(temp.next !== null) {
            temp = temp.next;
        }
        // Set the end of the list to the newest node
        temp.next = newNode;
        this.size++;
    }

    print() {
        /*
        Starting at the beginning of the list,
        We iterate thorugh the list and print each node data
        */

        // Create a pointer that points to the first node in the list
        let pointer = this.head;
        // While a node exist, print each node, then move to the next node
        while(pointer !== null) {
            console.log(pointer.data);
            pointer = pointer.next;
        }

    }
}


let list = new LinkedList();
list.add(100);
list.add(200);
list.add(300);
list.addToFront(400);
list.print();