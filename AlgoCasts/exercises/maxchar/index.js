// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const charMap = {}; //declaring a dictionary
    let max = 0; // setting max variable to start at 0
    let maxChar = ''; // setting maxChar variable to string

    for(let char of str){
         // forloop to check if it's in dictionary by itterating through string
        if(charMap[char]){ 
            charMap[char]++
        } else {            //if not in dictionary then add value equal to 1
            charMap[char] = 1;
        }
    }
    for(let char in charMap){ //char is the key, iterating through object
        if (charMap[char] > max){ // if value of charMap is grater than max then 
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     for (let char in charMap) { //char is the key
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// module.exports = maxChar;






// function maxChar(str) {
//     let dic = {};
//     let max = 0;
//     let maxChar = '';
//     for (let i = 0; i < str.length; i++) {
//         if (dic[str[i]] == null) {
//             dic[str[i]] = 1;
//         } else {
//             dic[str[i]]++
//         }
//     }
//     for (let j = 0; j < dic.length; j++) {
//         if (dic[str[i]] > max) {
//             max = dic[str[i]]
//             maxChar = char;
//         }
//     }
//     return maxChar
// }

// maxChar("hello")