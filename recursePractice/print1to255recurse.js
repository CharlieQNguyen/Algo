
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

function oneTo255(num) {
    //base case
    if(num <= 255) {
        console.log(num);
        //forward progress
        num++;
        //recursion call
        oneTo255(num)
    }
    return;
}

oneTo255(1)