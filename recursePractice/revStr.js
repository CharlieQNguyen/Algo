str = "dracula"

function reverse(str) {
  //basecase
  if(str.length == 0 || str.length == null) {
    return str = "";
  }
  //maincase
  return reverse(str.slice(1)) + str[0]
}

reverse(str)


reverse("dracula") -> 
reverse("racula") + "d"
reverse("acula") + "r" + "d"
reverse("cula") + "a" + "r" + "d"
reverse("ula") + "c" + "a" + "r" + "d"
reverse("la") + "u" + "c" + "a" + "r" + "d"
reverse("a") + "l" + "u" + "c" + "a" + "r" + "d"
reverse("") + "a" + "l" + "u" + "c" + "a" + "r" + "d"