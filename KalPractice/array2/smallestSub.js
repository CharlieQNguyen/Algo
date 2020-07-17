/*

Given an array of positive numbers and a positive number ‘S’, 
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
Return 0, if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

*/

arr = [2, 1, 5, 2, 3, 2]
S=7 

function smallestContiSumK(arr, S) {
    let windowSum = 0;
    let minSumLength = arr.length;
    let start = 0;
    //let count = 0;
    for(let end = 0; end < arr.length; end++) {
        windowSum += arr[end];
        //count++;
        if(windowSum >= S || arr[end] >= S) {
            minSumLength = Math.min(minSumLength.length);
            windowSum -= arr[start];
            start++;
        }
    }
    console.log(count)
}

smallestContiSumK(arr, S);


// function smallestSubarray(arr, S) {
//   let foundIt = false;
//   let k = 1;
//   let windowsum = 0;
//   for (let windowSize = 0; windowSize < arr.length; ++windowSize) {
//     for (let i = 0; i <= arr.length - k; ++i) {
//       for (let j = i; j < i + k; ++j) {
//         console.log("I am at " + j);
//         windowsum += arr[j];
//       }
//       console.log("windowsum equals " + windowsum);
//       console.log("***");
//       if (windowsum >= S) {
//         foundIt = true;
//         return console.log("the minimun subarray is " + k);
//       }
//       windowsum = 0;
//     }
//     ++k;
//   }
//   if (foundIt == false) {
//     return console.log("no solution");
//   }
// }
// smallestSubarray([3, 4, 1, 1, 6], 100);