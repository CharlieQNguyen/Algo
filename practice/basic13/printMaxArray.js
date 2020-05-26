arr = [10, 200, 30, 500];

function printMaxArray(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

printMaxArray(arr);