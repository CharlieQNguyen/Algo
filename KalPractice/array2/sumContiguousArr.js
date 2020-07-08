/*

output = 7
4 + (-1) + (-2) + 1 + 5 = 7

[-2, 3, 2, -1]

*/

//arr = [-2, -3, 4, -1, -2, 1, 5, -3]

arr = [-2, 3, -5, -1];

function sumContiguousSubArr(arr) {
    let globalMax = 0; // 3
    let currentMax = 0; // 3, 0
    for(let i = 0; i < arr.length; i++) {
        currentMax = currentMax + arr[i]; // 3, -1, -1
        if(globalMax < currentMax) {
            globalMax = currentMax
        }
        if(currentMax < 0) { 
            currentMax = 0; // 0, 0, 0
        }
    }
    return console.log(globalMax)
}

// arr = [-2, 3, 2, -1];

// function sumContiguousSubArr(arr) {
//     let currentMax = arr[0]; // -2, 3, 5
//     let globalMax = arr[0]; //-2, 3, 5,
//     for(let i = 1; i < arr.length; i++) {
//         let prevCombineCurrentMax = currentMax + arr[i] // 1, 5, 4
//         currentMax = Math.max(arr[i], prevCombineCurrentMax); // 3, 5, 4
//         if(currentMax > globalMax) {
//             globalMax = currentMax // 3, 5
//         }
//     }
//     return console.log(globalMax)
// }

sumContiguousSubArr(arr);