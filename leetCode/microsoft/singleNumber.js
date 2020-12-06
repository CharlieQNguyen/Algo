/*
    136. Single Number

    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

    Example 1:

    Input: nums = [2,2,1]
    Output: 1
    Example 2:

    Input: nums = [4,1,2,1,2]
    Output: 4
    Example 3:

    Input: nums = [1]
    Output: 1

*/

nums = [4, 1, 2, 1, 2];

Output: 4;

function singleNumber(nums) {

    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] += 1;
        } else {
            hash[nums[i]] = 1;
        }
    }

    for(let key in hash) {
        if(hash[key] == 1) {
            return console.log(key)
        }
    }
}

singleNumber(nums);

