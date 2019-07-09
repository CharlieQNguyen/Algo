// arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

// function singleEl(arr) {
//   let hash = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = 1;
//     } else {
//       hash[arr[i]] += 1;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (hash[arr[i]] === 1) {
//       return arr[i];
//     }
//   }
// }

// singleEl(arr);


// arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

// function singleEl(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       i++;
//     } else {
//       return arr[i];
//     }
//   }
// }

// singleEl(arr);

// arr = [1, 1, 3, 3, 4, 5, 5, 7, 8, 8];

// function singleEl(arr) {
//   let hash = {};
//   let singleElements = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = 1;
//     } else {
//       hash[arr[i]] += 1;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (hash[arr[i]] === 1) {
//       singleElements.push(arr[i]);
//     }
//   }
//   return singleElements;
// }

// singleEl(arr);