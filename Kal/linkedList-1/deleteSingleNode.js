const Node = require("./LinkedListNode");

function deleteNode(node) {
    const next = node.next;
    node.val = next.val;
    node.next = next.next;
}

const headNode = Node.createLinkedListFromArray(["a", "b", "c", "d"]);
deleteNode(headNode.findChild("a"));
console.log(headNode.toString());
