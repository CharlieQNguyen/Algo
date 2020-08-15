// arr = [2, 1, 5, 1, 3, 2];
// k = 3

arr = [2, 3, 4, 1, 5];
k = 2;

function maxSumK(arr, k) {
  let start = 0;
  let maxSum = 0;
  let windowSum = 0;

  for(let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    let windowLength = end - start + 1;
    if(windowLength === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[start];
      start++;
    }
  }
  return console.log(maxSum)
}
maxSumK(arr, k);

// function maxSumSubArray(arr, k) {
//     let maxSum = 0;
//     let windowSum = 0;
//     let windowStart = 0;

//     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//         // keep adding to the sum
//         windowSum += arr[windowEnd];
//         // now use sliding window if we do not hit requirement size of K
//         if(windowEnd >= k - 1) {
//             // pick the max between the sums
//             maxSum = Math.max(maxSum, windowSum)
//             // subtract element coming out
//             windowSum = windowSum - arr[windowStart]
//             // sliding window ahead
//             windowStart += 1  
//         }
//     }
//     console.log(maxSum)
//     return maxSum
// }

// maxSumSubArray(arr, k);

// arr = [2, 3, 4, 1, 5];
// k = 2;

// function maxSumSubSizeK(arr, k) {
//   let windowStart = 0;
//   let windowSum = 0;
//   let maxSum = 0;
//   let windowEnd = 0;
//   while (windowEnd < arr.length) {
//     windowSum += arr[windowEnd];
//     if (windowEnd - windowStart == k - 1) {
//       maxSum = Math.max(windowSum, maxSum);
//       windowSum = arr[windowEnd];
//       windowStart = windowEnd;
//     }
//     windowEnd++;
//   }
//   return console.log(maxSum);
// }
// maxSumSubSizeK(arr, k);

// function maximum_Sum_Subarray_SizeK(arr, k) {
//   let windowStart = 0;
//   let maxSum = 0;
//   let windowSum = 0;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];
//     let windowLength = windowEnd - windowStart + 1;
//     if (windowLength === k) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return console.log(maxSum);
// }

// maximum_Sum_Subarray_SizeK(arr, k);