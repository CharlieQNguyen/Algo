fruits = ["A", "B", "C", "A", "C"];

function fruitBasket(fruits) {
    let maxFruit = 0;
    let windowStart = 0;
    let hash = {};
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        // if fruit in hashmap add 1 if not set equal to 1
        if(hash[fruits[windowEnd]]) {
            hash[fruits[windowEnd]] += 1;
        } else {
            hash[fruits[windowEnd]] = 1;
        }
        // shrink the window if subarray is bigger than k
        while(Object.keys(hash).length > 2) {
            hash[fruits[windowStart]] -= 1;
            // delete key moment it hits zero to delete and move the start
            if(hash[fruits[windowStart]] == 0) {
                delete hash[fruits[windowStart]]
            }
            // move the windowStart index
            windowStart += 1
        }
        maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1)
    }
    console.log(maxFruit)
}

fruitBasket(fruits);