arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
//arr = [1, 3, 5]


function magicIndex(arr) {
    let mIndex = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === i) {
            mIndex.push(i)
        }
    }
    return console.log(mIndex)
}

magicIndex(arr);