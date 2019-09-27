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
        const newNode = new Node(data);
        //if head is null set head to new Node;
        if(this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }
        // Add to the end of the list since head is not null
        // Create a pointer that points at the beginning of the list
        let pointer = this.head;
        while(pointer.next !== null) {
            pointer = pointer.next;
        }
        pointer.next = newNode;
        this.size++;
    }

    palindrome() {
        let slow = this.head;
        let fast = this.head;

        while(fast != null) {
            fast = fast.next.next;
            slow = slow.next
        }
        let stack = [];
        let mid = slow
        console.log(mid)
        while(slow != null) {   //slow is already halfway
            stack.push(slow)
            slow = slow.next;
        }
        fast = this.head;
        while(fast !== mid) {
            let value = stack.pop();
            if(fast.data != value.data) {
                return false;
            }
            fast = fast.next;
        }
        return true;
    }

    print() {
        let pointer = this.head;
        let counter = 0;

        while(pointer !== null) {
            console.log(`${counter} : ${pointer.data}`)
            pointer = pointer.next;
            counter++;
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(2);
list.add(1);
list.print();

console.log(list.palindrome());