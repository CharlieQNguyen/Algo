//Given a string, find the length of the longest substring which has no repeating characters.

str = "aabccbb";

function noRepeatingSubStr(str) {
    let windowStart = 0;
    let windowLength = -Infinity;
    let hash = {};
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // create var to keep track of the right character
        const charRight = str[windowEnd]
        // check to see if character in windowStart is in the hash so we can move it to skip over duplicate
        if(charRight in hash) {
            // if right character is a key in the hashmap
            // look value in hash to see where you last saw the index (add 1 to move pass the duplicate)
            windowStart = Math.max(windowStart, hash[charRight] + 1)
        }
        // insert index as value in hashmap
        hash[str[windowEnd]] = windowEnd
        windowLength = Math.max(windowLength, windowEnd - windowStart + 1)

    }
    console.log(windowLength)
}

noRepeatingSubStr(str);