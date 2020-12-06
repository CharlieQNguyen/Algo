/*
    266. Palindrome Permutation
    Given a string, determine if a permutation of the string could form a palindrome.

    Example 1:

    Input: "code"
    Output: false
    Example 2:

    Input: "aab"
    Output: true
    Example 3:

    Input: "carerac"
    Output: true
*/

str = "code";

function palindrome(str) {
    
    let hash = {};

    let offSet = 0;

    for(let i = 0; i < str.length; i++) {

        if(!hash[str[i]]) {
            hash[str[i]] += 1;
            offSet++;
        } else {
            hash[str[i]] -= 1;
            offset--;
        }
    }
    return offset <= 1;
}

palindrome(str);