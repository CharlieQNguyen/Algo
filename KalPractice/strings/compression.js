str = "aabccccaaa";
result = "a2b1c4a3";

function compression(str) {
    let str2 ="";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]) {
            count++;
        } else {
            str2 += str[i];
            str2 += count;
            count = 1;
        }
    }
    console.log(str2)
}

compression(str);