// fruits = ["A", "B", "C", "A", "C"];

// function fruitBasket(fruits) {
//     let maxFruit = 0;
//     let windowStart = 0;
//     let hash = {};
//     for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//         // if fruit in hashmap add 1 if not set equal to 1
//         if(hash[fruits[windowEnd]]) {
//             hash[fruits[windowEnd]] += 1;
//         } else {
//             hash[fruits[windowEnd]] = 1;
//         }
//         // shrink the window if subarray is bigger than k
//         while(Object.keys(hash).length > 2) {
//             hash[fruits[windowStart]] -= 1;
//             // delete key moment it hits zero to delete and move the start
//             if(hash[fruits[windowStart]] == 0) {
//                 delete hash[fruits[windowStart]]
//             }
//             // move the windowStart index
//             windowStart += 1
//         }
//         maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1)
//     }
//     console.log(maxFruit)
// }

// fruitBasket(fruits);

fruits = ["A", "B", "C", "B", "B", "C"];

// function fruitBasket(fruits) {
//     let basket = 2;
//     let typesOfFruits = {};
//     let windowStart = 0;
//     let maxFruit = 0;

//     for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//         //put fruit in hash map called typesOfFruites
//         if(typesOfFruits[fruits[windowEnd]]) {
//             typesOfFruits[fruits[windowEnd]] += 1;
//         } else {
//             typesOfFruits[fruits[windowEnd]] = 1;
//         }
//         //while the list of type of fruits is in my basket is more than the basket
//         while (Object.keys(typesOfFruits).length > basket) {
//           typesOfFruits[fruits[windowStart]] -= 1;
//           if (typesOfFruits[fruits[windowStart]] === 0) {
//             delete typesOfFruits[fruits[windowStart]];
//           }
//           windowStart++;
//         }
//         let windowLength = windowEnd - windowStart + 1;
//         maxFruit = Math.max(maxFruit, windowLength);
//     }
//     return console.log(maxFruit)
// }

// fruitBasket(fruits);

function fruitInBasket(fruits) {
  let fruitmap = {};
  let maxlen = 0;
  let start = 0;
  for (let fruit of fruits) {
    let currentlen = 0;
    fruitmap[fruit] = fruitmap[fruit] + 1 || 1;
    while (Object.keys(fruitmap).length > 2) {
      fruitmap[fruits[start]] -= 1;
      if (fruitmap[fruits[start]] == 0) {
        delete fruitmap[fruits[start]];
      }
      start++;
    }
    for (let key in fruitmap) {
      currentlen += fruitmap[key];
    }
    maxlen = Math.max(currentlen, maxlen);
  }
  return maxlen;
}