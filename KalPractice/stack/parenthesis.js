// 1.Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

// str = "– 2 * ( 3 + 5(sasdfasdfasd)))))"
// str2 = "()[]{}";
str2 = "{[]}"
// str2 = "([)]";

function missingParenthesis(str2) {
    if(str2.length %2 !== 0) {
        return console.log(false)
    }
    let stack = [];
    var x = Math.floor(str2.length / 2) - 1;
    var prev = str2[x];
    for(let i = 0; i < str2.length; i++) {
        if(str2[i] === '(' || str2[i] === '[' || str2[i] === '{') {
            stack.push(str2[i]);
        } else if(stack.length !== 0 && str2[i] === ')' && prev === '(') {
            stack.pop();
            x--;
            prev = str2[x];
        } else if(stack.length !== 0 && str2[i] === ']' && prev === '[') {
            stack.pop();
            x--;
            prev = str2[x];
        } else if(stack.length !== 0 && str2[i] === '}' && prev === '{') {
            stack.pop()
            x--
            prev = str2[x];
        }
    }
    if(stack.length !== 0) {
        return console.log(false)
    }
    return console.log('this is true' + stack)
}

missingParenthesis(str2);

            // if (stack.length > 0) {
            //   prev = stack.pop();
            //   stack.push(prev);
            // } else {
            //   prev = null;
            // }