/*

Given an array of positive numbers and a positive number ‘k’, 
find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

arr = [2, 1, 5, 1, 3, 2];
k = 3;

/* [2, 1, 5, 1, 3, 2]
   [0, 1, 2, 3, 4, 5]
*/

function sumContiguousSubArrSizeK(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    let start = 0;
    for(let end = 0; end < arr.length; end++) {
        windowSum += arr[end];
        if(end >= k - 1) {
            maxSum = Math.max(windowSum, maxSum)
            windowSum -= arr[start];
            start +=1
        }
    }
    console.log(maxSum)   
}

sumContiguousSubArrSizeK(arr, k);