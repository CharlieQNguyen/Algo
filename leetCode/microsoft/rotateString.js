/*

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. 
Return True if and only if A can become B after some number of shifts on A.

796. Rotate String

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

*/

A = 'abcde'
B = 'abced'

function rotateString(A, B) {

    let aLength = A.length;
    let bLength = B.length;

    if(aLength !== bLength) {
        return false;
    }

    for(let s = 1; s < A.length; s++) {

        let tempString = A.substring(s) + A.substring(0, s);

        if(tempString === B) {
            return console.log(true);
        }
    }

    return console.log(false);
}

rotateString(A, B);