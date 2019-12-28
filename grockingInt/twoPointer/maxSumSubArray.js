arr = [2, 1, 5, 1, 3, 2];
k = 3

function maxSumSubArray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // keep adding to the sum
        windowSum += arr[windowEnd];
        // now use sliding window if we do not hit requirement size of K
        if(windowEnd >= k - 1) {
            // pick the max between the sums
            maxSum = Math.max(maxSum, windowSum)
            // subtract element coming out
            windowSum = windowSum - arr[windowStart]
            // sliding window ahead
            windowStart += 1  
        }
    }
    console.log(maxSum)
    return maxSum
}

maxSumSubArray(arr, k);