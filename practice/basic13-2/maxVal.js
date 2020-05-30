arr = [12, 4, 24, 5];

function maxVal(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return console.log(max)
}

maxVal(arr)