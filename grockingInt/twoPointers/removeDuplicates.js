/* 

Given an array of sorted numbers, remove all duplicates from it. 
You should not use any extra space; after removing the duplicates in-place return 
the length of the subarray that has no duplicate in it.

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

// arr = [2, 3, 3, 3, 6, 9, 9];
// output = 4;

// function removeDup(arr) {
//   arr = [2, 3, 3, 3, 6, 9, 9];
//     /*
//         arr = [2, 3, 3, 3, 6, 9, 9]; i = 1
//                   n
//         arr = [2, 3, 3, 3, 6, 9, 9]; i = 2
//                      n
//         arr = [2, 3, 3, 3, 6, 9, 9]; i = 3
//                      n  i
//         arr = [2, 3, 6, 3, 6, 9, 9]; i = 4
//                         n  i
//         arr = [2, 3, 6, 9, 6, 9, 9]; i = 5
//                            n  i
//         arr = [2, 3, 6, 9, 6, 9, 9]; i = 6
//                            n     i
                     
//     */

//   let noneDup = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       // 3 != 2; i = 1
//       // 6 != 3; i = 4
//       // 9 != 6
//       arr[noneDup] = arr[i];
//       // 3 = 3; i = 1
//       // 3 = 6; 
//       noneDup += 1;
//       // noneDup = 2; i = 1
//       // noneDup = 3;
//       // noneDup = 4;
//     }
//   }
//   return console.log(noneDup);
// }

arr = [2, 3, 3, 3, 6, 9, 9]
Output: 4;

function removeDup(arr) {
  let noneDup = 0;

  let 
}

removeDup(arr);