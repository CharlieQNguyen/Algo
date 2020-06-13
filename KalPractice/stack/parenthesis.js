// 1.Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

str = "– 2 * ( 3 + 5(sasdfasdfasd)))))"
str2 = "()[]{}";
str3 = "{[]}"
str4 = "([)]";

function missingParenthesis(str2) {
    let stack = [];
    let previousVal = [];
    for(let i = 0; i < str2.length; i++) {
        if(str2[i] === '(' || str2[i] === '[' || str2[i] === '{') {
            stack.push(str2[i])
            previousVal.push(str2[i]); 
        } 
        // else if(str2[i] === ')' || str2[i] === ']' || str2[i] === '}') {
        //     stack.pop(str[i])
        // }
    }
    console.log(previousVal);
}

missingParenthesis(str2);