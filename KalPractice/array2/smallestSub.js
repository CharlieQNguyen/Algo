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
  let windowStart = 0;
  let minLength = arr.length;
  let windowSum = 0;
  for(windowEnd = 0; windowEnd < arr.length; windowEnd++) { // windowEnd is i and i always increment
    windowSum += arr[windowEnd];
    while(windowSum >= S) { // had to use while loop to keep shrinking even if it's equal to or grater
      const windowLength = windowEnd-windowStart+1; // converting index to length typical involve +1
      minLength = Math.min(minLength, windowLength) // will pick the window length because window is going to shrink;
      windowSum -= arr[windowStart] // subtracting from start of window
      windowStart++; // windowStar moves to the next index
    }
  }
  return console.log(minLength);
};

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