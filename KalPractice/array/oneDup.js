arr = [-1, 3, 4, 5, 7, 7, 8];

function oneDup(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        var mid = Math.floor((left + right) / 2)
        if(arr[mid] !== arr[mid + 1]) {
            if(mid > 0 && arr[mid] == arr[mid - 1]) {
                return console.log(arr[mid])
            } else {
                left ++;
                mid --;
            }
        }
        if(arr[mid] !== arr[mid - 1]) {
            if(mid > 0 && arr[mid] == arr[mid + 1]) {
                return console.log(arr[mid])
            } else {
                mid++;
                right--;
            }
        }
    }
}


// function oneDup(arr) {
//     let hash = {};
//     for(let i = 0; i < arr.length; i++) {
//         if(hash[arr[i]]) {
//             return console.log(arr[i])
//         } else {
//             hash[arr[i]] = 1;
//         }
//     }
//     return console.log("no dup")
// }

// function oneDup(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == arr[i+1]) {
//             return console.log(arr[i])
//         }
//     }
//     return console.log('no dup')
// }

oneDup(arr)