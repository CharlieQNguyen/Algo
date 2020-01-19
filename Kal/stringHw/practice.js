str = "azxxzy";

function substring(str) {
  let found = false;
  let str2 = [];
  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i - 1] != str[i]) {
      str2.push(str[i]);
    } else {
      str2.pop();
      found = true;
    }
  }

  let x = str2.toString();
  if (found == true) {
    // substring(x)
  }
  //console.log(x)
  let a = "abcdef";
  let b = a.split("");
  console.log(a);
  console.log(b.toString(), replace("'", ""));
}

substring(str);
