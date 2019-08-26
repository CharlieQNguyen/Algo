//arr = [-2, 3, 2, -1];

// arr = [-2, -2, 3, 2, -1, 4, 5, 6, 0, 1];

// function sumContiguousSubarray(arr) {
//   let max_current = arr[0];
//   let max_global = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     max_current = Math.max(arr[i], max_current + arr[i]);
//     if (max_current > max_global) {
//       max_global = max_current;
//     }
//   }
//   console.log(max_global)
//   return max_global;
// }

// sumContiguousSubarray(arr);
//might have to reset maxcurrent
//[-2,-2, 3, 2, -1, 4, 5, 6, 0, 1 ]ls


// arr = [1, 4, 20, 3, 10, 5]
// sum = 33;

// function sumContiguousSubarray3(arr, sum) {
//   let max_current = arr[0];
//   let star = 0;
//   let end = 0;
//   for (let i = 1; i < arr.length; i++) {
//     max_current = Math.max(arr[i], max_current + arr[i]);
//     if (max_current = sum) {
//       return [star, end]
//     }
//   }
//   console.log(max_global);
//   return max_global;
// }

// sumContiguousSubarray3(arr);