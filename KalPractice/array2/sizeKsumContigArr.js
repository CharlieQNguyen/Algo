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

arr =   [2, 3, 4, 1, 5];
 //     [0, 1, 2, 3, 4];
k = 2;

function sumContiguousSubArrSizeK(arr, k) {
    let maxSum = 0; 
    let windowSum = 0; 
    let start = 0; 
    for(end = 0; end < arr.length; end++) {
        windowSum += arr[end]; 
        if(end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[start]
            start += 1;
        }
    }
    return console.log(maxSum)
}

sumContiguousSubArrSizeK(arr, k);




// arr = [2, 1, 5, 1, 3, 2];
// k = 3;

/* [2, 1, 5, 1, 3, 2]
   [0, 1, 2, 3, 4, 5]
*/

// function sumContiguousSubArrSizeK(arr, k) {
//     let windowSum = 0; // current window sum
//     let maxSum = 0; // need max sum to keep track of the max in the current window
//     let start = 0; // only move the start after our end is bigger than size K
//     for(let end = 0; end < arr.length; end++) {
//         windowSum += arr[end]; // adding to the window
//         if(end >= k - 1) { // if end is greater than K, it's time to evaluate. (reason for K - 1 because of end index starting at 0)
//             maxSum = Math.max(windowSum, maxSum) // compare the current maxSum vs current windowSum
//             windowSum -= arr[start]; // subtracting the start of the window from the window sum
//             start +=1 // moving the index of the start (moving the window)
//         }
//     }
//     console.log(maxSum)   
// }

// sumContiguousSubArrSizeK(arr, k);