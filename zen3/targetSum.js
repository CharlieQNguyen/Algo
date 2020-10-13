/*

How to find all pairs of elements in an integer array, whose sum is equal to a given number?

// arr = [5, 7, 10, 3, 4] input = 17 return [7, 10] // arr.sort() [3, 4 , 5, 7, 10] 14

*/
arr = [5, 7, 10, 3, 4];
target = 17;

function targetSum(arr, target) {

    let hash = {};

    for(let i = 0; i < arr.length; i++) {

        let complement = target - arr[i];
        // 17 - 5 = 12;
        // 17 - 7 = 10;
        // 17 - 10 = 7;
        if(complement in hash) {

            return console.log(hash[complement], i)

        } else {
            hash[arr[i]] = i;
            /*
            {
                5 = 0,
                7 = 1,
            }
            */
        }
    }
}

// function targetSum(arr, target) {
//     let start = 0;
//     let end = arr.length-1;
//     let answer = [];

//     arr.sort((a, b) => a -b)

//     while(start < end) {

//         let sum = arr[start] + arr[end]

//         if(sum > target) {
//             end--;
//         } else if(sum < target) {
//             start++;
//         } else if(sum == target) {
//             answer += "("+arr[start] +","+ arr[end]+")";
//             start++;
//             end--;
//         }
//     }
//     return console.log(answer)
// }

targetSum(arr, target);