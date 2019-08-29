//Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

str = "– 2 * ( 3 + 5(sasdfasdfasd)))))";

function balance(str) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.length !== 0) stack.pop();
      else if (stack.length === 0) count++;
    }
  }
  
  if(count < stack.length) {
    return "need more ) ";
  } else if(count > stack.length) {
    return "need more ("
  } else {
    return "no braces needed"
  }
}

balance(str);

//problem 2

// stack = [1, 2, 3, 4];

// function reverseStack(stack) {
//   let tempStack = [];
//   let i;
//   for (i = stack.length - 1; i >= 0; i--) {
//     tempStack.push(stack.pop());
//   }
//   for (i = 0; i < tempStack.length; i++) {
//     stack.push(tempStack[i]);
//   }
//   return stack;
// }

// reverseStack(stack);