const Node = require("./LinkedListNode");
const assert = require("assert");

function reverseIterative(head){
    let current = head;
    let previous = null;
    while(current) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
}

function reverseRecursive(head) {
    if (!head || !head.next) {
        return head;
    }
    const rest = reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

// assert(Node.compare(reverseIterative(Node.fromArray([])),                   Node.fromArray([])));
// assert(Node.compare(reverseIterative(Node.fromArray([1])),                  Node.fromArray([1])));
// assert(Node.compare(reverseIterative(Node.fromArray([1, 2, 3, 4, 5])),      Node.fromArray([5, 4, 3, 2, 1])));

assert(Node.compare(reverseRecursive(Node.fromArray([])),                   Node.fromArray([])));
assert(Node.compare(reverseRecursive(Node.fromArray([1])),                  Node.fromArray([1])));
assert(Node.compare(reverseRecursive(Node.fromArray([1, 2, 3])),            Node.fromArray([3, 2, 1])));