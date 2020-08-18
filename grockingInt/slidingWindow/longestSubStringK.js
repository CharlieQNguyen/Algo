// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// str = "araaci";
// k = 2

// function longestSubStringK(str, k) {
//     let windowStart = 0;
//     let maxLength = 0;
//     let hash = {};
    
//     for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         // expanding window in form of hashtable
//         if(hash[str[windowEnd]]) {
//             hash[str[windowEnd]] += 1;
//         } else {
//             hash[str[windowEnd]] = 1;
//         }
//         console.log(hash)
//         // shrink window while condition is not met
//         while(Object.keys(hash).length > k) {
//             // subtract from hash to eventually move window when value is zero
//             hash[str[windowStart]] -= 1
//             // if value in hash hits zero then delete the key
//             if(hash[str[windowStart]] == 0) {
//                 delete hash[str[windowStart]]
//             }
//             windowStart += 1
//         }
//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }
//     console.log(maxLength)
// }

// longestSubStringK(str, k);

// if want longest subarray: shrink inner loop till condition not met
// if want min subarray: shrink inner loop till condition is met

/*
Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

str = "araaci";
k = 2;

function longestSubStringK(str, k) {
    let hashChar = {};
    let windowStart = 0;
    let maxLength = 0;
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if(hashChar[str[windowEnd]]) {
            hashChar[str[windowEnd]] += 1;
        } else {
            hashChar[str[windowEnd]] = 1;
        }
        while(Object.keys(hashChar).length > k) {
            hashChar[str[windowStart]] -= 1;
            if(hashChar[str[windowStart]] === 0){
                delete hashChar[str[windowStart]]
            }
            windowStart++
        }
        windowLength = windowEnd - windowStart + 1;
        maxLength = Math.max(maxLength, windowLength)
    }
    return console.log(maxLength)
}

longestSubStringK(str, k);

// return new string
// function LongSubDisChar(str, k) {
//   let newstr = "";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       k == 1 &&
//       (str[i] == str[i + 1] || (str[i] == str[i - 1] && str[i] != str[i + 1]))
//     ) {
//       newstr += str[i];
//     } else if (newstr.includes(str[i]) == false && k != 1 && count < k) {
//       newstr += str[i];
//       count++;
//     } else if (newstr.includes(str[i]) == true && k != 1) {
//       newstr += str[i];
//     }
//   }
//   if ((count == 0) & (k == 1)) {
//     return 1;
//   }
//   return newstr.length;
// }