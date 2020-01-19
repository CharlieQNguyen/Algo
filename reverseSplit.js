str = "One Two Three Hello World";

function reverse(str) {
  let stringX = "";
  strRestult = splitString(str);
  while (strRestult.length > 0) {
    stringX += strRestult.pop();
    if (strRestult.length !== 0) {
      stringX += " ";
    }
  }
  console.log(stringX);
  return stringX;
}

function splitString(str) {
  let arr = [];
  let startW = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] == " ") {
      arr.push(str.substring(startW, i));
      startW = i + 1;
    }
  }
  return arr;
}

reverse(str);
