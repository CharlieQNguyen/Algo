/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.

Examples:

Input: arr[] = {9, 29, 10, 2, 50, 24, 100}, n = 50

Output: Pair Found: (50, 100)
*/

arr = [9, 29, 10, 2, 50, 24, 100];
//    [2, 9, 10, 24, 29, 50, 100]
target =26;



function targetDiff(arr, target) {
  arr.sort((a, b)=> a - b);
  console.log(arr)

  let left = 0;
  let right = 1;

  while(left < right) {
    let difference = arr[right] - arr[left];
    if (difference == target) {
      return console.log("( " + arr[left] + ", " + arr[right] + " )");
    } else if (difference > target) {
      left++;
    } else if (difference < target) {
      //          7       < 26
      right++;
      if (right == arr.length) {
        break;
      }
    } 
  }
  return console.log("there no numbers that add up to target")
}

targetDiff(arr, target);

// targetDiff(arr, target);

// function targetDiff(arr, target) {
//   arr.sort((a, b) => a - b);
//   console.log(arr)

//   let start = 0;
//   let end = arr.length - 1;
//   let answer = [];

//   while (start < end) {
//     let difference = arr[end] - arr[start];

//     if (difference < target) {
//       end--;
//     }
//     else if (difference > target) {
//       start++;
//     }
//     else if (difference === target) {
//       answer.push(arr[start]);
//       answer.push(arr[end]);
//       return console.log(answer)
//     }
//   }
//   return console.log("-1");
// }

// targetDiff(arr, target);





// function targetDiff(arr, targetDifference) {
//   arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let currentDifference = arr[right] - arr[left];

//     if (currentDifference === targetDifference) {
//       return [arr[left] + " : " + arr[right]];
//     }

//     if (targetDifference > currentDifference) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return console.log("none");
// }

// targetDiff(arr, targetDifference);