class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  toString() {
    let str = "";
    let current = this;
    while (current) {
      str += current.val + "->";
      current = current.next;
    }
    str += "null";
    return str;
  }

  static createLinkedListFromArray(arr) {
    const head = new Node(null);
    let current = head;
    for (const o of arr) {
      current.next = new Node(o);
      current = current.next;
    }
    return head.next;
  }
}

module.exports = Node;