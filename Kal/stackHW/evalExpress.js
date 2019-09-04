

str = "2+5*2+4";

function express(str) {
  let stack = [];
  let temp = 0;
  let val;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      stack.push(str[i]);
    }
    if (str[i] == "*") {
      let pop = stack.pop(str[i]);
      //console.log(pop)
      let current = stack.pop();
      //console.log(current)
      stack.push(pop * current);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    val = stack.pop(stack[i]);
    val += val;
  }
  console.log(stack);
}

express(str);
