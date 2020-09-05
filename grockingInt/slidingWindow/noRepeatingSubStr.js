//Given a string, find the length of the longest substring which has no repeating characters.

str = "aabccbb";

function noRepeatSubString(str) {
    let windowStart = 0;
    let charFreq = {};
    let minLength = -Infinity;

    for(let i = 0; i < str.length; i++) {
        if(charFreq[str[i]]) {
            charFreq[str[i]] += 1;
        } else {
            charFreq[str[i]] = 1;
        }
    }

    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {

        let rightChar = str[windowEnd];
        let windowLength = windowEnd - windowStart + 1; 

        if(rightChar in charFreq) {
            charFreq[rightChar] -= 1
        }
        if(charFreq[rightChar] === 0) {

        }

    }
}

noRepeatSubString(str);



// var lengthOfLongestSubstring = function (str) {
//   let start = 0;
//   let maxlen = 0;
//   let currval = "";
//   if (str.length == 1) {
//     return 1;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (currval.includes(str[i]) == true) {
//       maxlen = Math.max(maxlen, currval.length);
//       start++;
//       i = start;
//       currval = str[start];
//     } else {
//       currval += str[i];
//       temp = str[i];
//     }
//   }
//   maxlen = Math.max(maxlen, currval.length);
//   return maxlen;
// };





































// function noRepeatingSubStr(str) {
//     let windowStart = 0;
//     let windowLength = -Infinity;
//     let hash = {};
//     for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         // create var to keep track of the right character
//         const charRight = str[windowEnd]
//         // check to see if character in windowStart is in the hash so we can move it to skip over duplicate
//         if(charRight in hash) {
//             // if the character is a key in the hashmap
//             // look value in hash to see where you last saw the index (add 1 to move pass the duplicate)
//             windowStart = Math.max(windowStart, hash[charRight] + 1)
//         }
//         // insert index as value in hashmap
//         hash[str[windowEnd]] = windowEnd
//         windowLength = Math.max(windowLength, windowEnd - windowStart + 1)

//     }
//     console.log(windowLength)
// }

// noRepeatingSubStr(str);