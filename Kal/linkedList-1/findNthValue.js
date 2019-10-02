const Node = require("./LinkedListNode");

function findNthValue(head, n) {
    // Set current pointer to head
    // Set counter to keep track of node because no index in linkedlinst
    let current = head;
    let counter = 0;
    while(current) {
        // traversing to see if counter is equal to the nth node
        // if coutner is equal to node then return nodes favlue
        if(counter === n) {
            return current.val
        }
        current = current.next;
        counter++;
    }
    return current.val;
}

const headNode = Node.createLinkedListFromArray(["a","b","c","d"]);
console.log(findNthValue(headNode, 2));
