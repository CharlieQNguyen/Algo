/*

1446. Consecutive Characters

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Example 3:

Input: s = "triplepillooooow"
Output: 5
Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11
Example 5:

Input: s = "tourist"
Output: 1

*/
s = "hooraaaaaaaaaaay";

Output: 2;

function consecutiveChar(s) {
    let maxChar = 0;
    let currentCount = 1;
    for(let i = 0; i < s.length; i++) {

        if(s[i] == s[i+1]) {
            currentCount++;
            maxChar = Math.max(maxChar, currentCount)
        } else {
            currentCount = 1;
        }
    }
    console.log(maxChar)
}

consecutiveChar(s);