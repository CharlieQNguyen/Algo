// 1.Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

// str = "– 2 * ( 3 + 5(sasdfasdfasd)))))"
// str2 = "()[]{}";
str2 = "{ [ ] }"
// str2 = "([)]";

function missingParenthesis(str2) {
    let stack = [];
    for(let i = 0; i < str2.length; i++) {
        if(str2[i] === '(' || str2[i] === '[' || str2[i] === '{') {
            stack.push(str2[i]);
            var prev = str2[i];
        } else if(stack.length !== 0 && str2[i] === ')' && prev === '(') {
            stack.pop();
            if(stack.length>0){
                prev=stack.pop();
                stack.push(prev);
            } else {
                prev = null;
            }
        } else if(stack.length !== 0 && str2[i] === ']' && prev === '[') {
            stack.pop();
        } else if(stack.length !== 0 && str2[i] === '}' && prev === '{') {
            stack.pop()
        }
    }
    if(stack.length !== 0) {
        return console.log(false)
    }
    return console.log(true)
}

missingParenthesis(str2);