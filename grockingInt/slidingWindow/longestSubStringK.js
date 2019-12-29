// Given a string, find the length of the longest substring in it with no more than K distinct characters.

str = "araaci";
k = 2

function longestSubStringK(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let hash = {};
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // expanding window in form of hashtable
        if(hash[str[windowEnd]]) {
            hash[str[windowEnd]] += 1;
        } else {
            hash[str[windowEnd]] = 1;
        }
        console.log(hash)
        // shrink window while condition is not met
        while(Object.keys(hash).length > k) {
            // subtract from hash to eventually move window when value is zero
            hash[str[windowStart]] -= 1
            // if value in hash hits zero then delete the key
            if(hash[str[windowStart]] == 0) {
                delete hash[str[windowStart]]
            }
            windowStart += 1
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    console.log(maxLength)
}

longestSubStringK(str, k);

// if want longest subarray: shrink inner loop till condition not met
// if want min subarray: shrink inner loop till condition is met