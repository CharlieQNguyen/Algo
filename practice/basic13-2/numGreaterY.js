num = [3, 1, 6, 2, 10, 30, 15];
y = 7;

function greaterThanY(num, y) {
    let count = 0;
    let val = []
    for(let i = 0; i < num.length; i++) {
        if(num[i] > y) {
            count++;
            val.push(num[i])
        }
    }
    return console.log("count " + count + " values "+ val)
}

greaterThanY(num, y)