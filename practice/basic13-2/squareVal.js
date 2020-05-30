arr = [12, 4, 24, 5];

function sqlVal(arr) {
    for(let i =0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr)
}

sqlVal(arr)