
module.exports = class Stack {
  constructor(data) {
    // https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript
    if (!!data && data.constructor === Array)
      this.data = data;
    else
      this.data = [];
  }

  pop() {
    return this.data.pop();
  }

  push(value) {
    this.data.push(value);
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  toString(){
      return this.data.toString();
  }
}