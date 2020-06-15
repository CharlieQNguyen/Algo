// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let str2 = '';
    for(let i = str.length-1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2
}
console.log(reverse('asdf'));

module.exports = reverse;

// function reverse(str) {
//    const arr = str.split('');
//    arr.reverse();
//    return arr.join('');
// }

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) { // iterating through each character of str and each character equal to temp variable in this case character
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }
// reverse('asdf')

// module.exports = reverse;

// function reverse(str) { // my solutions
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         newStr += str[str.length - 1 - i];
//     }
//     return (newStr)
// }