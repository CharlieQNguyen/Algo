const Node = require("../Kal/linkedList-1/LinkedListNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {return head}

    let cp = head;
    let dpPrev = null;
    let dp = head;
    let counter = 1;
    // loop through current pointer and incrasing the count
    while(cp) {
        // if counter is greater than kth element then move dp
        if(counter > n) {
            dpPrev = dp;
            dp = dp.next;
        }
        cp = cp.next;
        counter++;
    }

    // Remove dp
    if (dpPrev === null) {
        // If dpPrev is null then we have to remove the head
        return head.next;
    }
    dpPrev.next = dp.next;
    return head;
};

const headNode = Node.createLinkedListFromArray(["a","b","c","d"]);
console.log(removeNthFromEnd(headNode, 4).toString());
