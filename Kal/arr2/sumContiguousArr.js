arr = [-2, 3, 2 -1]

function kadane(arr) {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxCurrent) {
            maxCurrent = arr[i];
        } else {
            // add the current index value to the maxCurrent
            maxCurrent += arr[i];
        }
        // check maxCurrent against maxGlobal
        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal
}