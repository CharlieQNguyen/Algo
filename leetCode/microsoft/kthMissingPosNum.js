/*
    1539. Kth Missing Positive Number

    Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

    Find the kth positive integer that is missing from this array.

    Example 1:

    Input: arr = [2,3,4,7,11], k = 5
    Output: 9
    Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
    Example 2:

    Input: arr = [1,2,3,4], k = 2
    Output: 6
    Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/
arr = [1, 2, 3, 4];

k = 2;
yujhgj = {sadfasdfas 
safaf }
function kThMissingPositiveNum(arr, k) {

    let counter = 0;
    let arr2 = [];
    for(let i = 0; i <= 1000; i++) {
        counter++;
         if(arr[i] != counter) {
            arr2.push(counter);
         }
    }
    for(let j = 0; j < arr2.length; j++) {
        if(j == k) {
            return console.log(k)
        }
    }
}

kThMissingPositiveNum(arr, k);