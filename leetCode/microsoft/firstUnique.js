/*
    387. First Unique Character in a String

    Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode"
    return 2.
*/

s = "leetcode";

function firstUnique(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]]) {
            hash[s[i]] += 1;
        } else {
            hash[s[i]] = 1;
        }
    }
    for(let key in hash) {
        if(hash[key] == 1) {
            return console.log(s.indexOf(key))
        } 
    }
    return console.log(-1)
}

firstUnique(s);