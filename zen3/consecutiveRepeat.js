/*

find maximum consecutive repeating character in string.

Input : str = "aaaaaabbcbbbbbcbbbb"

Output :a

*/

str = "aaaaaabbcbbbbbcbbbb";


function maxRepeat(str) {
    let length = str.length;
    let maxCount = 0;
    let currentCount = 1;
    let char = str[0];

    for(let i = 0; i < str.length; i++) {

        if(i < length-1 && str[i] == str[i+1]) {
            currentCount++;
        } else {
            if(currentCount > maxCount) {
                maxCount = currentCount;
                char = str[i]
            }
            currentCount = 1;
        }
    }
    return console.log(char)
}

maxRepeat(str);

// function maxRepeat(str) {
//   let maxCount = 0;
//   let char = str[0];

//   for (let i = 0; i < str.length - 1; i++) {
//     let count = 1;
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] == str[j]) {
//         count++;
//         maxCount = Math.max(maxCount, count);
//       } else {
//         if (count > maxCount) {
//           maxCount = count;
//           char = str[j];
//         }
//       }
//     }
//   }
//   return console.log(char);
// }

// maxRepeat(str);