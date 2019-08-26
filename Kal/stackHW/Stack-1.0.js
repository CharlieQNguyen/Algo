//Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

str = "– 2 * ( 3 + 5(sasdfasdfasd))";

function balance(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      stack.pop();
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack.length !== 0) {
      return stack[i] + " needs a closing bracket";
    }
  }
  return "no missing";
}

balance(str);