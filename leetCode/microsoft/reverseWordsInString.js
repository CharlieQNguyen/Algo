/*
    557. Reverse Words in a String III

    Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

    Example 1:
    Input: "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"
    Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

str = "Let's take LeetCode contest";

Output: "s'teL ekat edoCteeL tsetnoc";

function reverseWord(str) {
    str = str.split(" ");

    for(let i = 0; i < str.length; i++) {
        let turnBacktoString = "";
        for(j = str[i].length-1; j >= 0; j--) {

            turnBacktoString += str[i][j];

        }
        str[i] = turnBacktoString
    }
    str = str.join(" ")
    console.log(str)
}

reverseWord(str);