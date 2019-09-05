num = 13231;

function palindromeNum(num) {
  if (num < 0) {
    return false;
  }
  num = num.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindromeNum(num);