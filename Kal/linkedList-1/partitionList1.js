const ListNode = require("./LinkedListNode");

// O(n) time
// O(1) space
function partitionList(head, x) {
    // create two list and concatinate these list 
    // create leftHead list setting first node to null (dummy node)
    let leftHead = new ListNode(null);
    // create leftTail and set to leftHead
    let leftTail = leftHead;
    // create rightHead list setting first node to null (dummy node)
    let rightHead = new ListNode(null)
    // create rightTail and set to righthead
    let rightTail = rightHead;
    // loop through original head
    let current = head;
    while(current) {
        // if value less than x then it goes to the left list
        if(current.val < x) {
            leftTail.next = current;
            leftTail = current;
        } else {
            rightTail.next = current;
            rightTail = current;
        }
        current = current.next;
    }
    // set rightTail next to point to the beggning of rightTail list which is the right tail head
    leftTail.next = rightHead.next;
    rightTail.next = null;
    return leftHead.next;
}

const headNode = ListNode.createLinkedListFromArray([1, 4, 3, 2, 5, 2]);
console.log(partitionList(headNode, 3).toString());