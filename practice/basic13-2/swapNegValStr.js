arr = [1, 2, -3, 4, -5];

function swapNegValStr(arr) {
    str = "X"
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = str
        }
    }
    return(console.log(arr))
}

swapNegValStr(arr);