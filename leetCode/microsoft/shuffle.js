/*
    1470. Shuffle the Array

    Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

    Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

arr = [2, 5, 1, 3, 4, 7];

n = 3

function shuffle(arr, n) {

    let x = arr.slice(0, n);

    let y = arr.slice(n);

    let result = [];

    for(let i = 0; i < arr.length / 2; i++) {
        
        let cx = x[i];
        let cy = y[i];

        result.push(cx);
        result.push(cy)
    }
    return console.log(result)
}

shuffle(arr, n);