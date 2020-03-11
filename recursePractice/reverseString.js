var str = "dracula"

function reverseStr(str, i = str.length - 1, reversString = "") {
  // base case
  if (i < 0) {
    return reversString;
  }
  // progress

  reversString += str[i];
  i--;

  // recursive call

  return reverseStr(str, i, reversString);
}

console.log(reverseStr(str));