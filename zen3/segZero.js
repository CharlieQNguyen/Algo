/*

4. Segregate 0s on left side and 1s on right side of the array. Traverse array only once.

Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]

Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

*/

arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]

function segZero(arr) {
    let zero = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            let temp = arr[i];
            arr[i] = arr[zero];
            arr[zero] = temp;
            zero++;
        }
    }
    return console.log(arr)
}

segZero(arr);



// function segZero(arr) {

//     let z = 0;
//     for(let i = 0; i < arr.length; i++) {

//         if(arr[i] == 0) {
//             let temp = arr[i];
//             arr[i] = arr[z];
//             arr[z] = temp;
//             z++;
//         }
//     }
//     return console.log(arr)
// }

// segZero(arr)