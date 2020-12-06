/*

find the number that is most repetitive in an unsorted array ?

find maximum consecutive repeating character in string.

Input : str = "aaaaaabbcbbbbbcbbbb"

Output :a

*/


str = "aaaaaabbcbbbbbcbbb";

function maxRepeat(str) {
    let maxCount = 0;
    let currentCount = 1;
    let currentChar = str[0];

    for(let i = 0; i < str.length; i++) {

        if(str[i] === str[i+1]) {
            currentCount++;
        } else {
            if(currentCount > maxCount) {
                maxCount = currentCount;
                currentChar = str[i]
            }
            currentCount = 1
        }
    }
    return console.log(currentChar + ":" + maxCount)
}

maxRepeat(str);



// function maxRepeat(str) {
//   let maxCount = 0;
//   let char = str[0]

//   for(let i = 0; i < str.length - 1; i++) {
//     let count = 1;
//     for(let j = i + 1; j < str.length; j++) {
//       if(str[i] == str[j]) {
//         count++;
//         maxCount = Math.max(maxCount, count);
//       } else {
//         if(count > maxCount) {
//           maxCount = count;
//           char = str[j]
//         }
//       }
//     }
//   }
//   return console.log(char)
// }

// maxRepeat(str);


// function mode(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   var count = 0;
//   var maxCount = 0;
//   var number = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1] && count > maxCount) {
//       maxCount = count;
//       number = arr[i];
//     } else if (arr[i] == arr[i + 1]) {
//       count++;
//     }
//     if (arr[i] != arr[i + 1]) {
//       count = 0;
//     }
//   }
//   return number;
// }
// var T1 = [4, 5, 1, 3, 5, 8, 9, 10, 4, 4, 5, 1, 2];

// console.log(mode(T1));
