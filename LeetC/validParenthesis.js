
/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

*/

str = "()[]{}"

function isValid(str) {
    let stack = [];
    let start = 0;
    let end = str.length-1;

    while(start > end) {
        if(str[start] == "(" || str[start] == "[" || str[start] == "{") {
            stack.push(str[start])
            start++;
        }
    }
    console.log(stack)
}

isValid(str)