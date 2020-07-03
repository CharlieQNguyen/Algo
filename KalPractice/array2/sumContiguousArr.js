/*

output = 7
4 + (-1) + (-2) + 1 + 5 = 7

*/

arr = [-2, -3, 4, -1, -2, 1, 5, -3]

function sumContiguousSubArr(arr) {
    let end = arr.length-1;
    let sum = 0;
    for(start = 0; start < arr.length; start++) {
        if(arr[start] < 0 && arr[end] < 0) {
            start++;
            end--;
        } 
    }
}

sumContiguousSubArr(arr);