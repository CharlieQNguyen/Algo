
//var num = 1;

// function oneTo255(num) {
//     // base case
    
//     if(num > 255) {
//         return;
//     }
//     // forward progress
//     console.log(num)
//     num++;
//     // recursive call
//     return oneTo255(num);
// }

// oneTo255(1);

// function oneTo255(num) {
//     //base case
//     if(num <= 255) {
//         console.log(num);
//         //forward progress
//         num++;
//         //recursion call
//         oneTo255(num)
//     }
//     return;
// }

// oneTo255(1)

// Recursive utilizing the Call Stack

function oneTo255(num) {
    //base case
    if(num > 0) {
        num--;
        oneTo255(num)
        console.log(num + 1)
        
    }
    return
}

oneTo255(255);