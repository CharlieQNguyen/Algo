/*

Problem Statement #
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

*/

arr = [2, 5, 9, 11];
target = 11;

function targetSum(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let sum = 0;
    let indexSum = [];

    while(start < end) {
        let mid = Math.floor((start + end)/2);
        sum = arr[start] + arr[end]

        if(sum === target) {
            indexSum.push(start, end)
            console.log("this is the start : " + start)
            console.log("this is the end : " + end)
        } 
        else if(arr[mid] > target) {
            end = mid - 1;
            console.log("this is target greater than sum")
        }
        else if(arr[mid] < target)
        {
            start = mid + 1;
            console.log("this is target less than sum")
        }
    }
    console.log(indexSum)
}

targetSum(arr, target);