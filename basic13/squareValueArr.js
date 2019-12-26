arr = [1, 2, 3, 4, 5]

function squareValueArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        squareNum = arr[i] * arr[i];
        arr[i] = squareNum
    }
    console.log(arr)
}

squareValueArr(arr);