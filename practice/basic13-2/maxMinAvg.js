arr = [3, 1, -6, -2, 10, 30, 15];

function maxMinAvg(arr) {
    let max = -Infinity;
    let min = Infinity;
    let sum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(arr[i] > max) {
            max = arr[i]
        } else if(arr[i] < min) {
            min = arr[i]
        }
    }
    let avg = sum/arr.length;
    return console.log("Max: " + max + " Min: " + min + " Avg: " + avg)
}

maxMinAvg(arr);