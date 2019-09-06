Stack = require("./stack.er.js");
colors = require("colors");

function reverseStack(s) {
    let t1 = new Stack();
    let t2 = new Stack();

    console.log("before:", "s:", s, "t1:", t1, "t2:", t2);
    while (!s.isEmpty()){
        let value = s.pop();
        t1.push(value);
        console.log("value:", value, "s:", s, "t1:", t1);
    }
    while (!t1.isEmpty()) {
      let value = t1.pop();
      t2.push(value);
      console.log("value:", value, "t1:", t1, "t2:", t1);
    }
    while (!t2.isEmpty()) {
      let value = t2.pop()
      s.push(value);
      console.log(s);
    }
}

//reverseStack(new Stack([1, 2, 3, 4]));

function reverseStackER(s) {
  let s2 = new Stack()
  let i = 0;

  while(i < s.size()-1) {
    console.log("===== outer loop", "i:", i, `s1: ${s}`.red);
    let top = s.pop() 
    console.log("===== inner loop 1");
    while(s.size() > i) {
      console.log("i:", i, `s1.size(): ${s.size()}`.green, "top:", top, `s1: ${s}`.green, `s2: ${s2}`.blue);
      let value = s.pop();
      s2.push(value);
    }
    s.push(top)
    console.log("===== inner loop 2");
    while(!s2.isEmpty()) {
        console.log("i:", i, `s2.size(): ${s2.size()}`.blue, "top:", top, `s1: ${s}`.green,`s2: ${s2}`.blue);
        let value = s2.pop();
        s.push(value)
    }
    i++;
  }
  console.log(s);
}

reverseStackER(new Stack([1, 2, 3, 4]));
// reverseStackER(new Stack([1, 2, 3, 4, 5, 6, 7, 8]));