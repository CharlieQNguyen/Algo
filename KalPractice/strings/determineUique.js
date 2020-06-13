// str = "aaaaaabbbbbccccc"
str = "abcde"

// function determineUique(str) {
//     let hash = {};
//     for(let i = 0; i < str.length; i++) {
//         if(hash[str[i]]) {
//             return console.log(false);
//         } else {
//             hash[str[i]] = 1;
//         }
//     }
//     return console.log(true);
// }

// determineUique(str)

function determineUique(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                return console.log(false + " String is not Unique")
            }
        }
    }
    return console.log(true + " All Char is Unique")
}

determineUique(str);