/*

Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. 
The result should also be sorted in ascending order. If there is a tie, the smaller elements are 
always preferred.

Find K closest elements to a given value X in an array arr[].
Input: K = 4, X = 35, arr[] = {12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56}

*/
//     0   1   2   3   4   5   6   7   8    9
arr = [1,  2,  3,  4,  5,  6,  7,  8,  9,  10];
//     L           M           H
//     L           H

//     L   M       H
//             L   H

//            M/L  H
//            M/L/H

//
k = 4;
x = 5;

function kClosestElement(arr, k, x) {
  let low = 0;
  let high = arr.length - k; // a certain amount of spaces on the top (get k element away from end of array so we dont get out of bound error)

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    // (0 + 6)/2 =             3
    // (0 + 3)/2 = 1.5 floor = 1
    // (2 + 3)/2 = 2.5 floor = 2
    if (x - arr[mid] > arr[mid + k] - x) {
      // if this is true then our low value is too low
      // first    (5 - 4) > (8 - 5)
      // first    (1)     > (3)    false

      // second   (5 - 2) > (6 - 5)
      // second   (3)     > 1      true

      // third    (5 - 3) > (7 - 5)
      // third    (2)     > (2)    false
      low = mid + 1;
    } else {
      // means our high value is too high
      high = mid;
      //high = 3
      //third = high = 2
    }
  }
  return console.log(arr.slice(low, low + k));
  // arr.slice(2, 6)
  // [3, 4, 5, 6]
}

kClosestElement(arr, k, x);
