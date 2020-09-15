/*

Given a sorted array, create a new array containing 
squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

*/

arr = [-2, -1, 0, 2, 3];

output = [0, 1, 4, 4, 9];

function squareSortArr(arr) {

    let newArr = [];
    let start = 0;
    let end = arr.length-1;

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    while(start < end) {
        
    }
}

squareSortArr(arr);