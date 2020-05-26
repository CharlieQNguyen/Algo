arr = [1, -2, 3, 4, -5];

function swapStringNeg(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "dojo"
        }
    }
    console.log(arr)
}

swapStringNeg(arr);