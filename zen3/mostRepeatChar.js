/* 

Write a simple code for finding the most repeated character in given string

Input : str = "aaaaaabbcbbbbbcbbbb"

*/

str = "aaaaaabbcbbbbbcbbbb"

function mostRepeat(str) {

    let hash = {};

    for(let i = 0; i < str.length; i++) {
        if(hash[str[i]]) {
            hash[str[i]] += 1;
        } else {
            hash[str[i]] = 1;
        }
    }
    let max = 0;
    let char = "";
    for(let key in hash) {
        if(hash[key] > max) {
            max = hash[key];
            char = key;
        }
    }
    return console.log(char)
}

mostRepeat(str);