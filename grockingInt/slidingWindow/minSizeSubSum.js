// Given an array of n positive integers and a positive integer s, 
// find the minimal length of a contiguous subarray of which the sum ≥ s. 
// If there isn't one, return 0 instead.

// arr = [2,3,1,2,4,3]
// s = 7

 

// function minSizeSubArray(arr, s) {
//     let windowStart = 0;
//     let windowSum = 0;
//     let minLength = Infinity;
//     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//         windowSum += arr[windowEnd]; // expand
//         // while windowSum is bigger than S keep shrinking until it'not bigger or equal to s
//         while(windowSum >= s) {
//             // get minimum length by comparing with actual window
//             // actual window = end - start + 1
//             minLength = Math.min(minLength, windowEnd - windowStart + 1);
//             // move windowStart by subtracting one value from the actual windowSum
//             windowSum -= arr[windowStart]
//             // move the index of window start
//             windowStart += 1
//         }
//     }
//     if(minLength === Infinity) {
//         return 0;
//     }
//     console.log(minLength)
//     return minLength
// }

// function SmallSubSum(arr, s){
// 	let start = 0;
//     let end = 0;
//     let sum = 0;
//     let minLength = arr.length;
//     for(let i = 0; i<arr.length; i++){
//     	sum += arr[i];
//         if(sum >= s){
//           	end = i;
//             if (minLength > end - start+1){
//             minLength = end - start+1;
//             start = end;
//           	}
//           	sum = arr[i];
//     	}
      	
// 	}
//   return arr.slice(start,end+1)
// }

// function SmallSubSum(arr, s) {
//   let start = 0;
//   let end = 0;
//   let sum = 0;
//   let minLength = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum >= s) {
//       end = i;
//       if (minLength > end - start + 1) {
//         minLength = end - start + 1;
//         start = end;
//       }
//       sum = arr[i];
//     }
//   }
//   return arr.slice(start, end + 1);
// }

// arr = [2, 1, 5, 2, 3, 2];
// s = 7;

// function smallestSubSum(arr, s) {
//   let windowStart = 0;
//   let minLength = arr.length;
//   let windowSum = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];

//     while (windowSum >= s) {
//       let windowLength = windowEnd - windowStart + 1;
//       minLength = Math.min(minLength, windowLength);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   if (minLength === 0) {
//     return console.log(0);
//   }
//   return console.log(minLength);
// }

// smallestSubSum(arr, s);

arr = [3, 4, 1, 1, 6];
s = 80

function smallestContigueSum(arr, s) {
  let windowStart = 0;
  let smallestLength = Infinity;
  let windowSum = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

    windowSum += arr[windowEnd];

    while(windowSum >= s) {
      let windowLength = windowEnd - windowStart + 1;

      smallestLength = Math.min(smallestLength, windowLength);

      windowSum -= arr[windowStart];

      windowStart++;
    }
  }
  if(smallestLength === Infinity) {
    return console.log("0")
  }
  return console.log(smallestLength)
}

smallestContigueSum(arr, s);