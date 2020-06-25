/*

Given a list of n-1 integers and these integers are in the range of 1 to n. 
There are no duplicates in list. One of the integers is missing in the list. 
Write an efficient code to find the missing integer.

Input : arr[] = [1, 2, 3, 4, 6, 7, 8]
Output : 5

Input : arr[] = [1, 2, 3, 4, 5, 6, 8, 9]
Output : 7

*/

arr = [1, 2, 3, 4, 5, 6, 8, 9];

function missingNum(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i + 1) {
            return console.log(i + 1)
        }
    }
    return console.log('no missing')
}

missingNum(arr);