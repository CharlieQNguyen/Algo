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
    let location = ["", 1, 0]
    let lines = readme.split(/\r\n|\n/);
    for(line in lines) {
        if(lines[line].length == 0) {
            console.log(false)
        }
    }
    let lineNumber = 1;
    let wordIndex = 0;
    for(line in lines) {
        //console.log(lines[line])
        for(let word in line) {
            console.log(lines[word]);
            
        }
    }
}

longestWord(readme);

// location = ['', 1, 0]
//     with open(file_name) as file:
//         lines = file.readlines()
//         if len(lines) == 0:
//             return None
//         line_number = 1
//         for line in lines:
//             line = line.split()
//             word_index = 0
//             for word in line:
//                 if len(word) > len(location[0]):
//                     location[0] = word
//                     location[1] = line_number
//                     location[2] = word_index
//                 elif (len(word) == len(location[0])
//                         and word_index < location[2]):
//                     location[2] = word_index
//                 word_index += 1
//             line_number += 1
//         return f'{location[1]}: {location[0]}'