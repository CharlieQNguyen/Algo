str = "mayamoodybabydoomayam";

function palindrom(str) {
  //base case
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  //maincase
  if (str[0] == str[str.length - 1]) {
    return palindrom(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

palindrom(str);
