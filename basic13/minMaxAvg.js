arr = [6, 7, 3, 4, 5];

function minMaxAvg(arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(arr[i] < min) {
            min = arr[i]
        } else if(arr[i] > max) {
            max = arr[i]
        }
    }
    let avg = sum/arr.length
    console.log("min= " + min + " max= " + max + " avg= " + avg)
}

minMaxAvg(arr);