arr = [1, 2, 3, 4, 5];
 
function shiftLeft(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
    console.log(arr)
}

shiftLeft(arr);