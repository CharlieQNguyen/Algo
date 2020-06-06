str = "this is just a test";

function replaceSpace(str) {
    str2 = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            str2 += str[i];
        } else {
            str2 += '%/20';
        }
    }
    return console.log(str2)
}

replaceSpace(str)