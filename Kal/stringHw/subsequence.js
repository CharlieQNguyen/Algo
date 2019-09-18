//Given two sequences, print longest common subsequence
//LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
//LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

str1 = "ABCDGH";
str2 = "ADFHR";

function subsequence(str1, str2) {
  let hash = {};
  let seq = "";
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = 1;
    } else {
      hash[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) {
      seq += str2[i];
      hash[str2[i]] -= 1;
    }
  }
  return seq + " " + seq.length;
}

subsequence(str1, str2);
