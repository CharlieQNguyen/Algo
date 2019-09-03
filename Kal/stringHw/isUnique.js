//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

str = "rainbow";

function uniqueC(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]] += 1;
    }
  }
  for (let key in hash) {
    if (hash[key] > 1) {
      return false;
    }
  }
  return true;
}

uniqueC(str);