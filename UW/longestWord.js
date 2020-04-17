/* 
write a function longest_word that takes a string file_name and returns the longest word in the file with which line it
appears on. If there are ties for the longest word, it should return the one that appears first in the file. If the file is
empty or there are no words in the file, the function should return None. You may assume that the file_name describes a file that
exists.

Suppose we had a file called poem.txt with the contents:

1. she sells
2. sea
3. shells by
4. the sea shore

then the following call would return:
1. longest_word('poem.txt') # '3 : shells'

Because the longest word is "shells" and appears on line 3.
*/

var fs = require("fs");
var readme = fs.readFileSync("../poem.txt", "utf8"); // fs.readFileSync is required for us to read teh file 
//console.log(readMe)

function longestWord(readme) {
    let word = readme.split(/\b\s+(?!$)/);
    longWord = "";
    for(let i = 0; i < word.length; i++) {
        if(word[i].length > longWord.length) {
            longWord = word[i]
        }
    }
    console.log(longWord)
}

longestWord(readme);