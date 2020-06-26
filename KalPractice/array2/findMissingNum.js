/*

Given a list of n-1 integers and these integers are in the range of 1 to n. 
There are no duplicates in list. One of the integers is missing in the list. 
Write an efficient code to find the missing integer.

Input : arr[] = [1, 2, 3, 4, 6, 7, 8]
Output : 5

Input : arr[] = [1, 2, 3, 4, 5, 6, 8, 9]
Output : 7

*/

//arr = [1,2,3,4,5,6,7,9]  // l = 8     [1,2,4,5,6,7,8,9]  // l = 8
    // 0,1,2,3,4,5,6,7                 0,1,2,3,4,5,6,7                                              
    // mid = 3; arr[3] = 4             mid = 3; arr[3] = 5
    // --> start = 3 count = -1

    // [1,2,3,4,5,6,7,9]  l = 8
    //  0,1,2,3,4,5,6,7      
    // mid = 5; arr[5] = 6
    // start --> 5 count = 3

    // [1,2,3,4,5,6,7,9]  l = 8
    //  0,1,2,3,4,5,6,7      
    // mid = 6; arr[6] = 7
    // start --> 6 count =5



function missingNumBinarySearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  let count = -1;
  while (start < end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] == mid + 1 && count != start) {
      count = start;
      start = mid;
    } else if (arr[mid] == mid + 2 && count != end) {
      count = end;
      end = mid;
    } else {
      return count + 2;
    }
  }
}

missingNumBinarySearch(arr);
