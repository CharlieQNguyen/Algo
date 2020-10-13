/* 2.       

Merge two sorted arrays into one sorted array

int[] A = {1,5,7,12,18,32}

int[] B = {2,4,9,16,27,76,98}

*/

a = [1,5,7,12,18,32]
b = [2,4,9,16,27,76,98]

//answer = 1, 2, 4, 5, 7, 9, 12, 16, 18, 32, 76, 98

function mergeArr(a, b) {

    let length1 = a.length;
    let length2 = b.length;

    let i = 0;
    let j = 0;
    let answer = [];

    while(i < length1 && j < length2) {

        if(a[i] < b[j]) {
            answer.push(a[i]);
            i++;
        } else {
            answer.push(b[j]);
            j++;
        }
    }

    while(i < length1) {
        answer.push(a[i]);
        i++;
    }

    while(j < length2) {
        answer.push(b[j]);
        j++;
    }
    return console.log(answer)
}

// function mergeArr(a, b) {

//     let answer = [];

//     for(let i = 0; i < a.length; i++) {
//         answer.push(a[i])
//     }
//     for(let i = 0; i < b.length; i++) {
//         answer.push(b[i])
//     }
//     answer.sort((a, b) => a -b)
//     console.log(answer)
// }

mergeArr(a, b)