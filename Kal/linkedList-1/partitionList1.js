const Node = require("./LinkedListNode");

function partitionList(head, x) {
    const dummyHead = new Node();
    dummyHead.next = head;

    let tail = head;
    while(tail.next) {
        tail = tail.next;
    }

    let current = head;
    let prev = dummyHead;
    while(current) {
        const futureCurrent = current.next;
        const futurePrev = prev.next;
        if (current.val < x) {
            // Move node to left
            prev.next = current.next;
            current.next = dummyHead.next;
            dummyHead.next = current;
        }
        else if (current.val > x) {
            // Move node to the right
            tail.next = current;
            prev.next = current.next;
            current.next = null;
        }
        prev = futurePrev;
        current = futureCurrent;
    }

    dummyHead.next;
}

const headNode = Node.createLinkedListFromArray([5, 7, 3, 8, 9]);
console.log(partitionList(headNode, 6).toString());