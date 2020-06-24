// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    if(stringA.length !== stringB.length) {
        return false;
    }
    let hash = {};
    for(let i = 0; i < stringA.length; i++) {
        if(hash[stringA[i]]) {
            hash[stringA[i]] += 1;
        } else {
            hash[stringA[i]] = 1;
        }
    }
    for(let i = 0; i < stringB.length; i++) {
        if(!hash[stringB[i]]) {
            return false;
        } else {
            hash[stringB[i]] -= 1
        }
    }
    return true;
}

module.exports = anagrams;
