arr = [-1, 1.5, 2, 2.5, 4, 5];

num = 4;

function numFinder(arr, num) {
    let left = 0;
    let right = arr.length-1;
    while(left <= right) {
        var mid = Math.floor((left + right)/2);
        if(arr[mid] == num) {
            return console.log(arr[mid])
        } else if(arr[mid] < num) {
            left = mid + 1;
        } else if(arr[mid] > num) {
            right = mid - 1;
        }
    }
    return console.log('no number')
}

numFinder(arr, num);