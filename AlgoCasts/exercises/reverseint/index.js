// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
    let reverse = 0;
    let isNeg = false;
    if(num < 0){
        num = num * -1;
        isNeg = true;
    }
    while(num > 0){
        let a = num %10; //last digit
        reverse = (reverse * 10) + a; //add last digit to reverse
        num = (num - a)/10 //removes the last digit
    }
    if(isNeg == true){
        reverse = reverse * -1
    }
    return reverse;
}

module.exports = reverseInt;

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');

//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed)
// }

// function reverseInt(num) {
//     let rev = 0;
//     let int = num;
//     let isNeg = false;
//     if (int < 0) {
//         isNeg = true; // check to see if it's 
//         int = int * -1;
//     }
//     while (int > 0) {
//         let a = int % 10; // a is our last digit
//         rev = (rev * 10) + a
//         int = (int - a) / 10;
//     }
//     if (isNeg == true) {
//         rev = rev * -1;
//     }
//     return rev;
// }







// function reverseInt(num) { potential answer
//     let reverse = 0;
//     let isNeg = false;
//     if (num < 0) {
//         Math.abs(num);
//         isNeg = true;
//     }
//     while (num > 0) {
//         let a = num % 10;
//         reverse = (reverse * 10) + a;
//         num = (num - a) / 10;
//     }
//     if (isNeg == true) {
//         reverse = reverse * -1
//     }
//     return reverse;
// }