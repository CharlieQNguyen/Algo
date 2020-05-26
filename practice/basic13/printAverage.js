arr = [10, 200, 30, 500];

function printAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum/arr.length
    console.log(average)
}

printAverage(arr);