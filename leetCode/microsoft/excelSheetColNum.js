/*
    171. Excel Sheet Column Number
    Given a column title as appear in an Excel sheet, return its corresponding column number.

    For example:

        A -> 1
        B -> 2
        C -> 3
        ...
        Z -> 26
        AA -> 27
        AB -> 28 
        ...

    Example 1:

    Input: "A"
    Output: 1
    Example 2:

    Input: "AB"
    Output: 28
    Example 3:

    Input: "ZY"
    Output: 701
*/

s = "AA";
// Z = 26
// AA = 27
// 1 * 26 ^ 1 + 1 * 26 ^ 0
// ZY
// 26 * 26 ^ 1 + 25 * 26 ^ 0

// 1230 = 1 * 10 ^ 3 + 2 * 10 ^ 2 + 3 * 10 ^1 + 0 * 10^0
// 100 + 20 + 3

function excelColNum(s) {
    let hash = {
        A : 1,
        B : 2,
        C : 3,
        D : 4,
        E : 5,
        F : 6,
        G : 7,
        H : 8,
        I : 9,
        J : 10,
        K : 11,
        L : 12,
        M : 13,
        N : 14,
        O : 15,
        P : 16,
        Q : 17,
        R : 18,
        S : 19,
        T : 20,
        U : 21,
        V : 22,
        W : 23,
        X : 24,
        Y : 25,
        Z : 26
    }

    let result = 0;

    for(let i = 0; i < s.length; i++) {

        result += hash[s[i]] * 26 ** (s.length - 1 - i)
    //          = 1 * 26 ^ (2 - 1 - 0) = 1 * 26 ^ 1
    //          = 1 * 26 = 26
    //  result  = 26
    //          = 1 * 26 ^ (2 - 1 - 1) = 1 * 26 ^ 0
    //          = 1 * 26 ^ 0 = 1
    //  result = 26 + 1 = 27
    }
    console.log(result)
}

excelColNum(s);