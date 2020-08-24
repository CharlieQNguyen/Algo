/*

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.

*/

str = "aabdec";
pattern = "abc"
//Output: "abdec";

function find_smallest_SubStr(str, pattern) {
  let windowStart = 0;
  let patternMap = {};
  let startOfStr = 0;
  let smallestSubStrLength = Infinity;
  let match = 0;
  for(let i = 0; i < pattern.length; i++) {
    if(patternMap[pattern[i]]) {
      patternMap[pattern[i]] += 1;
    } else {
      patternMap[pattern[i]] = 1;
    }
  }
  // {a : 1, b : 1, c : 1}
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if(rightChar in patternMap) {
      patternMap[rightChar] -= 1;

      if(patternMap[rightChar] >= 0) {
        match += 1;

      }
    }
    while(match === pattern.length) {
      var currentWindowLength = windowEnd - windowStart + 1;
      //console.log(" this is a test " + currentWindowLength)

      smallestSubStrLength = Math.min(smallestSubStrLength, currentWindowLength);

      startOfStr = windowStart;

      let leftChar = str[windowStart];

      windowStart += 1;

      if(leftChar in patternMap) {

        if(patternMap[leftChar] === 0) {

          match -= 1;

        }
        patternMap[leftChar] += 1;
      }
    }
  }
  if(smallestSubStrLength > str.length) {
    return ''
  }
  return console.log(str.substring(startOfStr, startOfStr + smallestSubStrLength));
}

find_smallest_SubStr(str, pattern);










// function find_substring(str, pattern) {
//   let windowStart = 0,
//     matched = 0,
//     substrStart = 0,
//     minLength = str.length + 1,
//     charFrequency = {};

//   for (i = 0; i < pattern.length; i++) {
//     const chr = pattern[i];
//     if (!(chr in charFrequency)) {
//       charFrequency[chr] = 0;
//     }
//     charFrequency[chr] += 1;
//   }

//   // try to extend the range [windowStart, windowEnd]
//   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (rightChar in charFrequency) {
//       charFrequency[rightChar] -= 1;
//       if (charFrequency[rightChar] >= 0) {
//         // Count every matching of a character
//         matched += 1;
//       }
//     }

//     // Shrink the window if we can, finish as soon as we remove a matched character

//     (String = "aabdec"), (Pattern = "abc");
//     Output: "abdec";
//     while (matched === pattern.length) {
//       if (minLength > windowEnd - windowStart + 1) {
//         minLength = windowEnd - windowStart + 1;
//         substrStart = windowStart;
//       }

//       const leftChar = str[windowStart];
//       windowStart += 1;
//       if (leftChar in charFrequency) {
//         // Note that we could have redundant matching characters, therefore we'll decrement the
//         // matched count only when a useful occurrence of a matched character is going out of the window
//         if (charFrequency[leftChar] === 0) {
//           matched -= 1;
//         }
//         charFrequency[leftChar] += 1;
//       }
//     }
//   }

//   if (minLength > str.length) {
//     return "";
//   }
//   return str.substring(substrStart, substrStart + minLength);
// }