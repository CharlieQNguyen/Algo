/*

    53. Maximum Subarray
    Easy

    9954

    479

    Add to List

    Share
    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

    Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
    Example 2:

    Input: nums = [1]
    Output: 1
    Example 3:

    Input: nums = [0]
    Output: 0
    Example 4:

    Input: nums = [-1]
    Output: -1
    Example 5:

    Input: nums = [-2147483647]
    Output: -214748364

*/

nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

function maxSub(nums) {
    let max = 0;

    for(let i = 0; i < nums.length; i++) {
        let currentMax = 0;

        currentMax += nums[i];

        if(currentMax > max) {
            max = currentMax;
        }
    }
    console.log(max)
}

maxSub(nums);