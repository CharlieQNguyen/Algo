arr = [3, 1, -6, -2, 10, -30, 15];

function zeroNeg(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return console.log(arr)
}

zeroNeg(arr)