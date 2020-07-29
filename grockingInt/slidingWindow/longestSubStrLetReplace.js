/*

Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

*/

str = "aabccbb";
k = 2;

function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    console.log(str);
    console.log("* WindowStart is at index " + windowStart + "  ******");
    console.log("* WindowEnd is at index " + windowEnd + "  ******");
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      console.log("I am adding a key to my hashmap " + rightChar);
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    console.log(frequencyMap)
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount,frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    console.log("my max letter count is " + maxRepeatLetterCount);
    console.log("The WINDOW length is " + (windowEnd - windowStart + 1));
    console.log(
      "is THIS: " +
        (windowEnd - windowStart + 1 - maxRepeatLetterCount) +
        " bigger than our k: " +
        k +
        " ???"
    );
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      console.log("YES!!!");
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
      console.log("I have nudged the WindowStart to index " + windowStart);
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    console.log("this is my maxLength " + maxLength)
    console.log("* I just ended step " + (windowEnd + 1) + "  ******");
    console.log("**************************");
  }
  return maxLength;
}

console.log(length_of_longest_substring("aabccbb", 2));