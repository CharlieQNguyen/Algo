/* Write a method called count_words that takes a file name and returns a dict that
stores the words as  keys and values that counts the number of times that word
appeared in the file. Remember a token is a sequence of characters separated by spaces.

for example suppose we had a file called popular_techno_song.txt had the following contents

dun dun dun dun
dun dun dun dun
err
dun dun dun dun dun dun dun dun
dundundundundundun
er er er er er er ER ER ER ER ER ER der der der der derrr

return should be 
{dur: 16, err: 1, undundundundundun: 1, er: 6, ER: 6, der: 4, derrr: 1}

*/

var fs = require("fs");
var readMe = fs.readFileSync("../popularSong.txt", "utf8"); // fs.readFileSync is required for us to read teh file 
//console.log(readMe)

function countWords(readMe) {
    let word = readMe.split(/\b\s+(?!$)/);
    let hash = {};
    for(let i = 0; i < word.length; i++) {
        if(hash[word[i]]) {
            hash[word[i]] += 1;
        } else {
            hash[word[i]] = 1;
        }
    }
    console.log(hash)
}

countWords(readMe);