/*
  Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

  Example 1:

  Input: [-3, 0, 1, 2, -1, 1, -2]
  Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
  Explanation: There are four unique triplets whose sum is equal to zero.

  Example 2:

  Input: [-5, 2, -1, -2, 3]
  Output: [[-5, 2, 3], [-2, -1, 3]]
  Explanation: There are two unique triplets whose sum is equal to zero.
*/

arr = [-3, 0, 1, 2, -1, 1, -2];

function tripSumZero(arr) {
  let tripplet = [];
  arr.sort((a, b) => a - b);

  //loop through array;
  for (let i = 0; i < arr.length - 2; i++) {
    // cover out of bound and skip over duplicate
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        tripplet.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        //skipping over duplicates
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }
  return console.log(tripplet);
}

tripSumZero(arr);

// function tripSumZero(arr) {
//   let mySet = new Set();
//   // [-3, -2, -1, 0, 1, 2]
//   arr.sort((a, b) => a - b);
//   // [-3, -2, -1, 0, 1, 1, 2]

//   //forLoop to loop through my array

//   for(let i = 0; i < arr.length-2; i++) {

//     let left = i + 1;
//     let right = arr.length-1;

//     while(left < right) {

//       let sum = arr[i] + arr[left] + arr[right];

//       if(sum === 0) {
//         mySet.add([arr[i], arr[left], arr[right]])
//         right--;
//         left++
//       }
//       if(sum > 0) {
//         right--;
//       }
//       if(sum < 0) {
//         left++;
//       }
//     }
//   }
//   return console.log(mySet)
// }

// tripSumZero(arr);

// function search_triplets(arr) {
//   Input: [-5, 2, -1, -2, 3];
//   Output: [
//     [-5, 2, 3],
//     [-2, -1, 3],
//   ];

//   arr.sort((a, b) => a - b);
//   // arr = [-5, -2, -1, 2, 3] i = 0
//   // arr = [-5, -2, -1, 2, 3] i = 1
//   const triplets = [];
//   // triplets = [-5, 2, 3]
//   for (i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       // skip same element to avoid duplicate triplets
//       continue;
//     }
//     search_pair(arr, arr[i], i + 1, triplets);
//     // arr = [-5, -2, -1, 2, 3],
//     // -arr[i] = 5
//     // i + 1 = 1
//     // triplets = []

//     // arr = [-5, -2, -1, 2, 3],
//     // -arr[i] = 2
//     // i + 1 = 2
//     // triplets = [-5, 2, 3]
//   }

//   return triplets;
// }

// function search_pair(arr, target_sum, left, triplets) {
//   // arr = [-5, -2, -1, 2, 3],
//   //         i
//   // arr = [-5, -2, -1, 2, 3],
//   //             i
//   // target_sum = -arr[i] = 5
//   // target_sum = -arr[i] = 2

//   // left = i + 1 = 1
//   // left = i + 1 = 2
//   // triplets = [[-5, 2, 3]]
//   let right = arr.length - 1;
//   // i = 0
//   //        1       4
//   //        2       4
//   //        4       3

//   // i = 1
//   //        2      4
//   //        3      4
//   //        3 ! <  3
//   while (left < right) {
//     const current_sum = arr[left] + arr[right];
//     // i = 0
//     // -2 + 3 = 1
//     // -1 + 3 = 2
//     //  2 + 3 = 5
//     //           1  === 5
//     //           2  === 5
//     //           5  === 5
//     // i = 1

//     //  2 + 3 = 5

//     //           -2 === 2
//     //            5 === 2
//     if (target_sum + arr[left] + arr[right] === 0) {
//       // found the triplet
//       triplets.push([target_sum, arr[left], arr[right]]);
//       //    triplets(-5, 2, 3)
//       left += 1;
//       right -= 1;
//       //      4      3           3     ===  2
//       while (left < right && arr[left] === arr[left - 1]) {
//         left += 1; // skip same element to avoid duplicate triplets
//       }
//       while (left < right && arr[right] === arr[right + 1]) {
//         right -= 1; // skip same element to avoid duplicate triplets
//       }
//       // i = 0
//       //            5 > 1
//       //            5 > 2
//       // i = 1
//       //            2 > 5
//     } else if (-target_sum > current_sum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//     // i = 0
//     // arr  = [-5, -2, -1, 2, 3]
//     // INDEX=   0,  1,  2, 3, 4
//     //          i       L     R
//     //          i          L  R
//     //          i          R  L
//     // i = 1
//     // arr  = [-5, -2, -1, 2,  3]
//     // INDEX=   0,  1,  2, 3,  4
//     //              i      L  R
//     //              i      LR
//   }
// }
