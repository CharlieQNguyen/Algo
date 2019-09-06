// First pass: count to the number of non space characters in the string
// subtract chars from true length n to see how many spaces we are allowed to replace with %20
// second pass:
// if we see space and there are still spaces left, append '%20' to str2 string
// otherwise copy current character
// when run out of spaces, append the empty string instead

str = "Mr John Smith";
num = str.length;

function urlLIFY(str, num) {
  let str2 = "";
  let chars = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") chars++;
  }
  let spaces = num - chars;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && spaces > 0) {
      str2 += "%20";
      spaces--;
    } else if (str[i] !== " ") {
      str2 += str[i];
    }
  }
  return str2;
}

urlLIFY(str, num);


// Not advance version
//========================

// str = "Mr John Smith";
// num = str.length;

// function urlLIFY(str) {
//   let str2 = " ";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       str2 += "%20";
//     } else {
//       str2 += str[i];
//     }
//   }
//   return str2;
// }

// urlLIFY(str);