/*
Given an array of positive numbers, find the maximum sum of a subsequence with the constraint 
that no 2 numbers in the sequence should be adjacent in the array. 
So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).
Answer the question in most efficient way.

Input : arr[] = {5, 5, 10, 100, 10, 5}
Output : 110

Input : arr[] = {1, 2, 3}
Output : 4

Input : arr[] = {1, 20, 3}
Output : 20

*/

arr = [5, 5, 10, 100, 10, 5];

function maxSumAdjacent(arr) {
    let include = 0; // sum
    let exclude = 0; // sum
    for(let i = 0; i < arr.length; i++) {
        let temp = Math.max(include, exclude); // 0 , 5 , 5, 15 , 105 , 105
        include = arr[i] + exclude; // 5 , 5 , 15 , 105, 25 , 110
        exclude = temp; // 0 , 5, 5, 15, 105, 105
    }
    return console.log(Math.max(include, exclude))
}

maxSumAdjacent(arr);