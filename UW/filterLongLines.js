/*
Write a method called filter_long_lines that takes a file name and minimum number of words and prints 
out all the lines in the file with at least that many words
(tokens separated by spaces).

for example, suppose we had a file called song.txt had the following contents
1. I'm just goin' to the store, to the store
2. I'm just goin' to the store
3. You might not see me anymore, anymore
I'm just goin' to the store

if we called filter_long_lines('song.txt, 7), it would print the output below
because these are all the lines with 7 or more words.

1. I'm just goin' to the store, to the store
2. You might not see me anymore, anymore
*/

var fs = require("fs");
var readMe = fs.readFileSync("../song.txt", "utf8");

num = 7

function longLines(readMe, num) {
    let lines = readMe.split("\n");
    let words = []
    for(let i = 0; i < lines.length; i++) {
        words.push(lines[i])
    }
    for(var item in words) {
        itemLength = words[item].split(' ')
        if(itemLength.length >= num) {
            console.log(words[item])
        }
    }
}

longLines(readMe, num);