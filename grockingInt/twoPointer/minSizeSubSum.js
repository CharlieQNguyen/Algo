// Given an array of n positive integers and a positive integer s, 
// find the minimal length of a contiguous subarray of which the sum ≥ s. 
// If there isn't one, return 0 instead.

arr = [2,3,1,2,4,3]
s = 7

function minSizeSubArray(arr, s) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // expand
        // while windowSum is bigger than S keep shrinking until it'not bigger or equal to s
        while(windowSum >= s) {
            // get minimum length by comparing with actual window
            // actual window = end - start + 1
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            // move windowStart by subtracting one value from the actual windowSum
            windowSum -= arr[windowStart]
            // move the index of window start
            windowStart += 1
        }
    }
    if(minLength === Infinity) {
        return 0;
    }
    console.log(minLength)
    return minLength
}

minSizeSubArray(arr, s);