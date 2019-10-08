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

  findChild(val) {
    let current = this;
    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.next;
    }
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

  static fromArray(arr){
    return Node.createLinkedListFromArray(arr);
  }

  /*
   * compares 2 linked lists and returns true if they're the same
   */
  static compare(l1, l2){
    // console.log("compare:", l1, l2);
    let c1 = l1;
    let c2 = l2;

    while (c1 && c2){
      if (c1.val !== c2.val){
        return false;
      }
      c1 = c1.next;
      c2 = c2.next;
    }
    if (!c1 ^ !c2){
      return false;
    }
    else {
      return true;
    }
  }
}

module.exports = Node;