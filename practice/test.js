// function reverseArray(array) {

//     for (let i = 0; i < array.length / 2; i++) {
//         let temp = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }
//     console.log (array);
// }

// let array = [1, 2, 3, 4, 5];
// reverseArray(array);

function reverseArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp
    }
    console.log(array)
}

let array = [1, 2, 3, 4, 5]
reverseArray(array)