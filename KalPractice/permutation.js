str1= "abcdefg"
str2= "gfedabc"

function permutation(str1, str2) {
    if(str1.length !== str2.length) {
        return console.log(false)
    }
    let hash = {};
    for(let i = 0; i < str1.length; i++) {
        if(hash[str1[i]]) {
            hash[str1[i]] += 1;
        } else {
            hash[str1[i]] = 1;
        }
    }
    for(let i = 0; i < str2.length; i++) {
        if(hash[str2[i]]) {
            hash[str2[i]] -=1;
        } else {
            return console.log(false)
        }
    }
    return console.log(true)
}

permutation(str1, str2);