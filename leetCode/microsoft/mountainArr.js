/*
        852. Peak Index in a Mountain Array

        Let's call an array arr a mountain if the following properties hold:

        arr.length >= 3
        There exists some i with 0 < i < arr.length - 1 such that:
        arr[0] < arr[1] < ... arr[i-1] < arr[i]
        arr[i] > arr[i+1] > ... > arr[arr.length - 1]
        Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

        

        Example 1:

        Input: arr = [0,1,0]
        Output: 1
        Example 2:

        Input: arr = [0,2,1,0]
        Output: 1
        Example 3:

        Input: arr = [0,10,5,2]
        Output: 1
        Example 4:

        Input: arr = [3,4,5,1]
        Output: 2
        Example 5:

        Input: arr = [24,69,100,99,79,78,67,36,26,19]
        Output: 2
*/

arr = [18, 29, 38, 59, 98, 100, 99, 98, 90];

Output: 2

function peakInMountainArr(arr) {

    let firstMax = 0;
    let secondMax = 0;

    let firstStart = 0;
    let secondStart = Math.floor(arr.length/2);

    let firstMaxIdx = 0;
    let secondMaxIdx = 0;

    while(firstStart < secondStart && secondStart < arr.length) {

        currentFirstMax = arr[firstStart];
        currentSecondMax = arr[secondStart];

        if(currentFirstMax > firstMax) {
            firstMax = currentFirstMax;
            firstMaxIdx = firstStart;
        }
        if(currentSecondMax > secondMax) {
            secondMax = currentSecondMax;
            secondMaxIdx = secondStart;
        }
        firstStart++;
        secondStart++;
    }
    if(firstMax > secondMax) {
        return console.log(firstMaxIdx)
    } else {
        return console.log(secondMaxIdx)
    }
}

peakInMountainArr(arr);