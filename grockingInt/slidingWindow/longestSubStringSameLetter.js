str = "abccde"

k = 1

function longestSubstringSameLetterReplace(str) {
    let windowStart = 0;
    let windowLength = -Infinity;
    let hash = {};
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // expand the map
        if(hash[str[windowEnd]]) {
            hash[str[windowEnd]] += 1;
        } else {
            hash[str[windowEnd]] = 1;
        }
    }
}

function feasible(hash) {

}