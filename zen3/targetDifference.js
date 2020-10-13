/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.

Examples:

Input: arr[] = {9, 29, 10, 2, 50, 24, 100}, n = 50

Output: Pair Found: (50, 100)
*/

arr = [9, 29, 10, 2, 50, 24, 100];
target = 50;

function targetDiff(arr, target) {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  let answer = [];

  while (start < end) {
    let difference = arr[end] - arr[start];
    console.log(difference)
    if (difference < target) {
      end--;
    }
    else if (difference > target) {
      start++;
    }
    else if (difference === target) {
      answer.push(arr[start]);
      answer.push(arr[end]);
      return console.log(answer)
    }
  }
  return console.log("-1");
}

targetDiff(arr, target);