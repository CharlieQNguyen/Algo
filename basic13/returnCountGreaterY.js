arr = [15, 2, 30, 4, 50];
y = 10

function countGreaterY(arr, y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            count++
            console.log(arr[i])
        }
    }
    console.log("total greater than y is " + count)
}

countGreaterY(arr, y);