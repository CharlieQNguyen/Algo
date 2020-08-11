/*

Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

*/

str = "oidbcaf";
pattern = "abc";

permStr("llabcccrc3bpb5555bac", "abc");

function permStr(str1, str2) {
  let hash1 = {};
  let hash2 = {};
  let isItThere = false;
  let j;
  for (let z = 0; z < str2.length; ++z) {
    if (str2[z] in hash1) {
      hash1[str2[z]] += 1;
    } else {
      hash1[str2[z]] = 1;
    }
  }
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] in hash1) {
      hash2 = Object.assign({}, hash1);
      for (j = i; j < Math.min(i + str2.length, str1.length); ++j) {
        if (!(str1[j] in hash2)) {
          i = j;
          break;
        }
        if (str1[j] in hash2) {
          hash2[str1[j]] -= 1;
          if (hash2[str1[j]] === 0) {
            delete hash2[str1[j]];
          }
        }
        if (Object.keys(hash2).length === 0) {
          isItThere = true;
          i = j;
          break;
        }
      }
    }
  }
  return console.log(isItThere);
}
