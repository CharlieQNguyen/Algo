const Node = require("./LinkedListNode");


function findKthValueFromEnd(head, k) {
    // Set current pointer to head
    // Set counter to keep track of node because no index in linkedlinst
    let current = head;
    let length = 0;
    while(current) {
        // traversing to see if counter is equal to the nth node
        current = current.next;
        length++;
    }

    // set current equal to head again
    //  create counter
    // create n which is the beggining index
    current = head;
    // let counter = 0;
    // let n = length - 1 - k;
    // traverse through list
    while(current) {
        length--;
        if(length === k) {
            return current.val;
        }
        current = current.next;
    }
    return null;
}

function findKthValueFromEndOptimal(head, k) {
    let cp = head;
    let dp = head;
    let counter = 0;
    // loop through current pointer and incrasing the count
    while(cp) {
        // if counter is greater than kth element then move dp
        if(counter > k) {
            dp = dp.next;
        }
        cp = cp.next;
        counter++;
    }
    // return the delayed pointer once current pointer is null;
    return dp.val;
}

const headNode = Node.createLinkedListFromArray(["a","b","c","d"]);
console.log(findKthValueFromEndOptimal(headNode, 0));
