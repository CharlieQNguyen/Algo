str1 = "ABCDGH";
str2 = "AEDFHR";

function sequences(str1, str2) {
  let hash = {};
  //let count = 0;
  let seq = "";
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) {
      //count++;
      seq += str2[i];
    }
  }
  return seq + " " + seq.length;
}

sequences(str1, str2);
