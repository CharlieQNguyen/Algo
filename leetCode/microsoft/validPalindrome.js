/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false
*/

s = "A man, a plan, a canal: Panama"


function validPalindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi, "");
    console.log(s)
}

validPalindrome(s);