/*

Write a function to reverse the order of words in a string ?

*/

str = "hello";

function reverse(str) {
  let str2 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return console.log(str2);
}

reverse(str);