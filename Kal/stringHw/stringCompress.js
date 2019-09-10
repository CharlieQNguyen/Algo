//Implement a method to perform a basic string compression using the counts of repeated characters. For example, 
//the string aabccccaaa would become a2b1c4a3. If the compressed string would not become smaller than the 
//original string, your method should return the original string.


str = "aabccccaaa";

function strCompress(str) {
  let str2 = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      str2 += str[i] + String(count);
      count = 1;
    }
  }
  if (str2.length < str.length) {
    return str2;
  } else {
    return str;
  }
}

strCompress(str);


// not advance version
//*****************************/
// str = "aabccccaaa";

// function strCompress(str) {
//   let str2 = "";
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       count++;
//     } else {
//       str2 += str[i] + String(count);
//       count = 1;
//     }
//   }
//   return str2;
// }

// strCompress(str);