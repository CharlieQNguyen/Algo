arr = [12, 4, 24, 5];

function printAvg(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return console.log(avg)
}

printAvg(arr)

