//Given two strings, write a method to decide if one is a permutation of the other?
//linear time complexity
str1 = "batman";
str2 = "manbat";

function permutation(str1, str2) {
  let hash = {};
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = 1;
    } else {
      hash[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) {
      hash[str2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

permutation(str1, str2);