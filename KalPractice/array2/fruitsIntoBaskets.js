/*
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

*/

fruits = ["A", "B", "C", "A", "C"];
ouput = 3

function fruitsInBasket(fruits) {
  let fruitCount = {};
  let windowStart = 0;
  let longestWindow = 0;
  let basket = 2;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    fruitCount[fruits[windowEnd]] = (fruitCount[fruits[windowEnd]] || 0) + 1;

    while (Object.keys(fruitCount).length > basket) {
      fruitCount[fruits[windowStart]] -= 1;
      if (fruitCount[fruits[windowStart]] == 0) {
        delete fruitCount[fruits[windowStart]];
      }
      windowStart++;
    }
    const windowLength = windowEnd - windowStart + 1;
    longestWindow = Math.max(windowLength, longestWindow);
  }
  return console.log(longestWindow);
}

// function fruitsInBasket(fruits) {
//     let fruitCount = {};
//     let windowStart = 0;
//     let longestWindow = 0;
//     let basket = 2;

//     for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//         if(fruitCount[fruits[windowEnd]]) {
//             fruitCount[fruits[windowEnd]] += 1;
//         } else {
//             fruitCount[fruits[windowEnd]] = 1;
//         }
//         while(Object.keys(fruitCount).length > basket) {
//             fruitCount[fruits[windowStart]] -= 1;
//             if(fruitCount[fruits[windowStart]] == 0) {
//                 delete fruitCount[fruits[windowStart]];
//             }
//             windowStart++;
//         }
//         const windowLength = windowEnd - windowStart + 1;
//         longestWindow = Math.max(windowLength, longestWindow);
//     }
//     return console.log(longestWindow)
// }

fruitsInBasket(fruits);