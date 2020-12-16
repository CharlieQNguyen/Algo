/*
    1512. Number of Good Pairs

        Given an array of integers nums.

        A pair (i,j) is called good if nums[i] == nums[j] and i < j.

        Return the number of good pairs.

        Example 1:

        Input: nums = [1,2,3,1,1,3]
        Output: 4
        Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
        Example 2:

        Input: nums = [1,1,1,1]
        Output: 6
        Explanation: Each pair in the array are good.
        Example 3:

        Input: nums = [1,2,3]
        Output: 0
*/

nums = [1, 2, 3, 1, 1, 3];

// hashX = 
// {
//   1 : 1 + 1 = 2,   2 + 1 = 3
//   2 : 1,
//   3 : 1
// }

//count = 0 + 1 = 1
//count = 1 + 2 = 3
//count = 3 + 1 = 4

function numGoodPar(nums) {
  let count = 0;
  let hash = {};

  for(let i = 0; i < nums.length; i++) {

    let currentNum = nums[i]

    if(hash[currentNum]) {
      count += hash[currentNum];
      hash[currentNum] += 1;
    } else {
      hash[currentNum] = 1;
    }
  }
  return console.log(count)
}
// function numGoodPar(nums) {
//   let count = 0;

//   for(let i = 0; i < nums.length; i++) {
    
//     for(let j = 1 + i; j < nums.length; j++) {

//       if(nums[i] == nums[j]) {
//         count++;
//       }
//     }
//   }
//   return console.log(count)
// }

numGoodPar(nums);