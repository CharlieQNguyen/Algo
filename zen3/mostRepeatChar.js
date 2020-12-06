/* 

Write a simple code for finding the most repeated character in given string

Input : str = "aaaaaabbcbbbbbcbbbb"

*/


str = "aaaaaaaabbcbbbbbcbb";

// function mostRepeat(str){
//   let hash = {};
//   let char = str[0];
//   let count = 0;

//   for(let i = 0; i < str.length; i++) {
//     if(hash[str[i]]) {
//       hash[str[i]] += 1;
//     } else {
//       hash[str[i]] = 1;
//     }
//   }
//   for(let key in hash) {
//     if(hash[key] > count) {
//       char = key;
//       count = hash[key]
//     }
//   }
//   console.log(hash)
//   return console.log(char+" : "+count);
// }

// mostRepeat(str);

function mostRepeatConsec(str) {
  let maxCount = 0;
  let currentCount = 1;
  let maxChar = str[0];

  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i] == str[i + 1]) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = str[i]
      }
      currentCount = 1;
    }
  }
  console.log(maxChar);
}

mostRepeatConsec(str);

// function mostRepeat(str) {

//     let hash = {};

//     for(let i = 0; i < str.length; i++) {
//         if(hash[str[i]]) {
//             hash[str[i]] += 1;
//         } else {
//             hash[str[i]] = 1;
//         }
//     }
//     let max = 0;
//     let char = "";
//     for(let key in hash) {
//         if(hash[key] > max) {
//             max = hash[key];
//             char = key;
//         }
//     }
//     return console.log(char)
// }

// mostRepeat(str);
