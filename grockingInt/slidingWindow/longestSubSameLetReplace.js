// Given a string with lowercase letters only, 
// if you are allowed to replace no more than ‘k’ letters with any letter, 
// find the length of the longest substring having the same letters after replacement.

str = "aabccbb";
k = 2

function longestSubSameLetReplace(str, k) {
    let windowStart = 0;
    let windowLength = 0;
    let hash = {}
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // expand hashmap
        if(hash[str[windowEnd]]) {
            hash[str[windowEnd]] += 1;
        } else {
            hash[str[windowEnd]] = 1;
        }
        console.log(hash)
        while(feasible(hash, windowEnd, windowStart, k) == false) {
            hash[str[windowStart]] -= 1;
            // if zero delete
            if(hash[str[windowStart]] == 0) {
                delete hash[str[windowStart]]
            }
            windowStart += 1
        }
        console.log(hash);
        windowLength = Math.max(windowLength, windowEnd - windowStart + 1);
    }
    console.log(windowLength)
    return windowLength
}

function feasible(hash, windowEnd, windowStart, k) {
    let maxValue = 0
    for(let key in hash) {
        if(hash[key] > maxValue) {
            maxValue = hash[key]
        }
    }
    if((windowEnd - windowStart + 1) - maxValue <= k ) {
        return true;
    } else {
        return false;
    }
}

longestSubSameLetReplace(str, k);