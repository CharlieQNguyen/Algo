function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = function(head) {
    let clonedNodes = new Map();
    let aNode = head;
    while(aNode) {
        // construting the clone
        // creating clone node and passing in the value from original node
        const bNode = new Node(aNode.val)
        // add to hashtable aNode as key, bNode as value
        clonedNodes.set(aNode, bNode) 
        // move the pointer  
        aNode = aNode.next;
    }
    // reset aNode to equal the head;
    aNode = head;
    while(aNode) {
        // getting clone bNode.next then assign it to clone of aNode.next which is bNode
        clonedNodes.get(aNode).next = clonedNodes.get(aNode.next);
        // getting clone bNode.random then assign it to the clone which is bNode.random
        clonedNodes.get(aNode).random = clonedNodes.get(aNode.random);

        aNode = aNode.next;
    }
    return clonedNodes.get(head);
};

var copyRandomListUnique = function(head) {
  if (!head) return head;
  // let clonedNodes = new Map();
  let clonedNodes = {};
  let aNode = head;
  while (aNode) {
    // construting the clone
    // creating clone node and passing in the value from original node
    const bNode = new Node(aNode.val);
    // add to hashtable aNode as key, bNode as value
    // clonedNodes.set(aNode, bNode);
    clonedNodes[aNode.val] = bNode;
    // move the pointer
    aNode = aNode.next;
  }
  // reset aNode to equal the head;
  aNode = head;
  while (aNode) {
    // getting clone bNode.next then assign it to clone of aNode.next which is bNode
    // clonedNodes.get(aNode).next = clonedNodes.get(aNode.next) || null;
    if (aNode.next) {
      clonedNodes[aNode.val].next = clonedNodes[aNode.next.val];
    }
    // getting clone bNode.random then assign it to the clone which is bNode.random
    // clonedNodes.get(aNode).random = clonedNodes.get(aNode.random) || null;
    if (aNode.random) {
      clonedNodes[aNode.val].random = clonedNodes[aNode.random.val];
    }

    aNode = aNode.next;
  }
  return clonedNodes[head.val];
};

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(2);
const a4 = new Node(4);

a1.next = a2;
a1.random = a3;
a2.next = a3;
a2.random = a2;
a3.next = a4;
a3.random = null;
a4.next = null;
a4.random = a3;

const cloned = copyRandomList(a1);
console.log(stringifyNode(cloned));

function stringifyNode(head) {
    let str = "";
    while (head) {
        str += `${head.val} (${head.random ? head.random.val : "null"}) -> `;
        head = head.next;
    }
    str += "null";
    return str;
}