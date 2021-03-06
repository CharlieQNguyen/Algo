class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const has_cycle = function(head) {
    if(head == null) {
        return head
    }
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) {
            return true;
        }
    }
    return false;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);