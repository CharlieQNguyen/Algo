/* write a method called count_unique_words that takes a file  name
and returns the number of unique tokens that appear in that life. Remember
a token is a sequence of characters separated by spaces.

for example, suppose we had a file called song.txt had the following contents
1. I'm just goin' to the store, to the store
2. I'm just goin' to the store
3. You might not see me anymore, anymore
I'm just goin' to the store
*/

var fs = require("fs");
var readMe = fs.readFileSync("../song.txt", "utf8"); // fs.readFileSync is required for us to read teh file 
//console.log(readMe)

function uniqueWords(readMe) {
    let word = "";
    for(let i = 0; i < readMe.length; i++) {
        word += readMe[i]
    }
    console.log(word)
}
uniqueWords(readMe);