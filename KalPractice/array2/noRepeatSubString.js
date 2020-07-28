/*

Given a string, find the length of the longest substring which has no repeating characters.

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

*/

// str = "aabccbb";
// Output: 3;

// function noRepeatSubString(str) {
//   let windowStart = 0;
//   let windowStrLength = -Infinity;
//   let hash = {};
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     if (hash[str[windowEnd]]) {
//       hash[str[windowEnd]] += 1;
//     } else {
//       hash[str[windowEnd]] = 1;
//     }
//     while (feasible(hash) == false) {
//       hash[str[windowStart]] -= 1;
//       if (hash[str[windowStart]] == 0) {
//         delete hash[str[windowStart]];
//       }
//       windowStart += 1;
//     }
//     windowStrLength = Math.max(windowStrLength, windowEnd - windowStart + 1);
//   }
//   return windowStrLength;
// }

// function feasible(hash) {
//   for (let key in hash) {
//     if (hash[key] > 1) {
//       // know its a duplicate so flag false
//       return false;
//     }
//   }
//   return true;
// }

// noRepeatSubString(str); 

function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    console.log(str);
    console.log("This is ITERATION " + (windowEnd + 1));
    const rightChar = str[windowEnd];
    console.log(
      "I am at index " +
        windowEnd +
        " and I am at letter " +
        rightChar +
        " the END of my WINDOW is at index " +
        windowEnd
    );
    console.log("The start of my WINDOW is currently at index " + windowStart);
    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      console.log("The START of my Window is NOW at " + windowStart);
    }

    charIndexMap[rightChar] = windowEnd;
    console.log("The LENGTH of my window is " + (windowEnd - windowStart + 1));

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    console.log("My MAXIMUM window length is " + maxLength);
    console.log(charIndexMap);
    console.log("*");
  }
  return console.log(maxLength);
}

let startString = "aabccbb";

non_repeat_substring(startString);

    //"aabccbb"