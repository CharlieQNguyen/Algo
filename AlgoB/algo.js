// function print1to255() {
//     for (let i = 1; i <= 255; i++) {
//         console.log(i)
//     }
// }

// print1to255()

// function printOdds() {
//     for (let i = 0; i <= 255; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }

// printOdds()

// function printIntAndSum() {
//     let sum = 0;
//     for (let i = 0; i <= 255; i++) {
//         console.log(i)
//         sum += i;
//         console.log(sum)
//     }
// }

// printIntAndSum()

// arr = [1, 2, 3]

// function printArrValues(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printArrValues(arr)

// arr = [1, 2, 3]

// function printArrMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }

// printArrMax(arr)

// arr = [1, 2, 3, 4];

// function printAverage(arr) {
//   let avg = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     avg = sum / arr.length;
//   }
//   console.log(avg);
// }

// printAverage(arr);

// function returnOddArr() {
//   let arr = [];
//   for (let i = 1; i <= 255; i++) {
//     if (i % 2 !== 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// returnOddArr();

// arr = [1, 2, 3, 4];

// function square(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= arr[i];
//   }
//   return arr;
// }

// square(arr);

// arr = [1, 5, 12, 25];
// y = 11;

// function arrayCountGreaterthanY(arr, y) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > y) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// arrayCountGreaterthanY(arr, y);

// arr = [-1, -5, 12, 25];

// function zeroNegatives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }

// zeroNegatives(arr);

// arr = [-1, -5, 12, 25, 5];

// function minMaxAvg(arr) {
//   let min = 0;
//   let max = 0;
//   let sum = 0;
//   let avg = sum / arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     sum += arr[i];
//     avg = sum / arr.length;
//   }
//   console.log(min, max, avg);
// }

// minMaxAvg(arr);

// arr = [1, 2, 3, 4, 5];

// function shiftArrVal(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = 0;
//   return arr;
// }

// shiftArrVal(arr);

// arr = [1, 2, -3, 4, -5];

// function swapString(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = "Dojo";
//     }
//   }
//   return arr;
// }

// swapString(arr);

// num = 17;
// function fizzBuzz(num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0 && i == num) {
//       str += " and FizzBuzz.";
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       str += " FizzBuzz";
//     } else if (i % 3 == 0) {
//       str += " Fizz";
//     } else if (i % 5 == 0) {
//       str += " Buzz ";
//     } else {
//       str += " " + i;
//     }
//   }
//   return str;
// }

// fizzBuzz(num);