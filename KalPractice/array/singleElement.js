// given a sorted array with duplicates find the number that is not a duplicates

arr = [1, 1, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8];

// function singleEl(arr) {
//     let singles = [];
//     for(let i = 0; i < arr.length; i+=2) {
//         if(arr[i] != arr[i+1]) {
//             singles.push(arr[i]);
//             i--;
//         }
//     }
//     return console.log(singles)
// }














// function singleEl(arr) {
//     let hash = {};
//     for(let i = 0; i < arr.length; i++) {
//         if(hash[arr[i]]) {
//             hash[arr[i]] += 1;
//         } else {
//             hash[arr[i]] = 1;
//         }
//     }
//     for(let key in hash) {
//         if(hash[key] < 2) {
//             return console.log(key)
//         }
//     }
//     return console.log('no single')
// }

singleEl(arr);

    // let start = 0;
    // let end = arr.length - 1;
    // // if(arr.length %2 == 0) {
    // //     return console.log('no single element')
    // // }
    // while (start < end) {
    //   var mid = Math.floor((start + end) / 2);
    //   if (arr[mid] == arr[mid] + 1) start++;
    //   end--;
    // }
    // console.log(arr[mid]);