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

    add(data) {
        // create new Node
        const newNode = new Node(data)
        // add to list if head is empty;
        if(this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }
        // add to end of the list if not empty
        // create pointer that points at beggining of list
        let pointer = this.head;
        //loop through end of the list
        while(pointer.next !== null) {
            pointer = pointer.next;
        }
        // set the end of the list to the newest node
        pointer.next = newNode;
        this.size++;
    }

    print() {
        //create pointer that points to first node
        let pointer = this.head;
        let counter = 0;
        //While a node exist, print each node then move to next pointer
        while(pointer !== null) {
            console.log(`${counter} : ${pointer.data}`);
            pointer = pointer.next;
            counter++;
        }
    }
}

let list = new LinkedList();
list.add(100);
list.add(200);
list.add(300);
list.print();

function circleLinkedList(list) {
    if(list.head == null) {
        return;
    }
    let hash = {};
    let slow = list.head;
    // traverse through the list
    while(slow !== null) {
        if(!hash[slow]) {
            hash[slow] = 1;
            slow = slow.next;
        } else {
            // at the beggining of the circle
            return slow
        }
    }
    return 
}

function circleLinkedList1(list) {
    if(list.head === null) {
        return;
    }
    let fast = list.head;
    let slow = list.head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        // if fast equal to slow then there's a circle
        if(fast === slow) {
            // reset either fast
            let fast = list.head;
            while(fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    return;
}