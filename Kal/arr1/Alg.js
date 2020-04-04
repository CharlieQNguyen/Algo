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

// arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

// function singleElements(arr) {
//     for(let i = 0; i < arr.length; i+= 2) {
//         if(arr[i] !== arr[i+1]) {
//             return arr[i]
//         }
//     }
// }

// singleElements(arr);

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


// arr = [-1, 1.5, 2, 2.5, 4, 5];
// num = -1;

// function numberFinder(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
// }

// numberFinder(arr, num);


// arr = [-1, 3, 4, 5, 7, 7, 8];

// function oneDup(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }

// oneDup(arr);


// arr = [-1, 3, 4, 5, 7, 7, 8];

// function oneDup(arr) {
//   let hash = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = 1;
//     } else {
//       hash[arr[i]] += 1;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (hash[arr[i]] > 1) {
//       return arr[i];
//     }
//   }
//   return false;
// }

// oneDup(arr);

// arr = [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3];
// num = 3;

// function adjacentOne(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
// }

// adjacentOne(arr, num);

// arr = [3, 12, 4, 5];

// function sumAdd(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let position = arr.indexOf(sum / 2);
//   if (position === -1) {
//     // not there
//     return false;
//   } else {
//     arr.splice(position, 1);
//     let arr2 = [sum / 2];
//     return [arr, arr2];
//   }
// }

// sumAdd(arr);

// Class 2

// arr1 = [5, 15, 20, 25];
// arr2 = [7, 10, 15];

// function twoArr(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   return arr1;
// }

// twoArr(arr1, arr2);

// Merge(a, b){
    //x = a.length -1
    //y = b.length -1
    //z = (x - y) -1
//}


//quesiton 2 in class
// find the unique element return it in an array

// arr = [4, 1, 2, 4, 2, 1, 3, 4]
// output = {3, 3, 3, 4, 4}
// if count is more than 1 in dectionary you would want to remove it
// if I aready have the value then i would decrement it
// if it's one then remove it
// time is O(n) space is 1+k