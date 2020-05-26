arr = [1, 2, 3, 6, 5];
output = [2, 3, 6, 5, 0]

/*
function shiftValueLeft(arr) {
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1]
        arr[arr.length-1] = temp
        console.log(arr)
    }
    console.log(arr)
}
shiftValueLeft(arr);*/

function shiftValueLeft(arr) {
    console.log(arr)
    for (let i=0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
        console.log(arr);
    }
    arr[arr.length-1] = 0
    console.log(arr)
}
shiftValueLeft(arr)
