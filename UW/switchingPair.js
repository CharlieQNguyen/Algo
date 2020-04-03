// Write a function switch_pairs that accept a string as a parameter and returns that string
// with each pair of neighboring letters reversed. If the string has an odd number of letters, the 
// last letter should not be modified. for example switch_pairs("example") should return "xemalpe"
// switch_pairs("hello there") should return "ehll ohtree"

str = "hello there";

function switchPair(str) {
  str2 = " ";
  for (let i = 0; i < str.length - 1; i += 2) {
    str2 += str[i + 1] + str[i];
  }
  if (str.length % 2 !== 0) {
    str2 += str[str.length - 1];
  }
  console.log(str2);
}

switchPair(str);
