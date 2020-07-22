/*
    Given a string, find the length of the longest substring in it with no more than K distinct characters.

    Input: String="araaci", K=2
    Output: 4
    Explanation: The longest substring with no more than '2' distinct characters is "araa". 

    Input: String="araaci", K=1
    Output: 2
    Explanation: The longest substring with no more than '1' distinct characters is "aa".

    Input: String="cbbebi", K=3
    Output: 5
    Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

str = "araaci";
K = 3;

function sizeKsumStrK(str, K) {
    let charCount = {};
    let windowStart = 0;
    let longestLength = 0;

    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if(charCount[str[windowEnd]]) {
            charCount[str[windowEnd]] += 1;
        } else {
            charCount[str[windowEnd]] = 1;
        }
        while(Object.keys(charCount).length > K) {
            charCount[str[windowStart]] -= 1;
            if(charCount[str[windowStart]] === 0) {
                delete charCount[str[windowStart]];
            }
            windowStart++;
        }
        const windowLength = windowEnd - windowStart + 1;
        longestLength = Math.max(longestLength, windowLength)
    }
    return console.log(longestLength);
}

sizeKsumStrK(str, K);