str = "– 2 * ( 3 + 5(sasdfasdfasd){";

function balance(str) {
  let last;
  let stack = [];
  let hash = { "(": ")", "[": "]", "{": "}" };
  if (str.length === 1 || str.length === 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    // if it's open bracket then push in stack
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
      // if closing then pop off the stack
    } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      last = stack.pop();
      //console.log(last)
    } else {
      continue;
    }
  }
  console.log(stack + " , are missing closing");
}

balance(str);