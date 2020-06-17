arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]

function singleEl(arr) {
    let hash = {};
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]] += 1;
        } else {
            hash[arr[i]] = 1;
        }
    }
    for(let key in hash) {
        if(hash[key] < 2) {
            return console.log(key)
        }
    }
    return console.log('no single')
}

singleEl(arr);