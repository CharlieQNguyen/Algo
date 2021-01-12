/*
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/


nums = [1, 1, 0, 1, 1, 1];

function consecutiveOne(nums) {
    let start = 0;
    let maxLength = 0;

    for(let end = 0; end < nums.length; end++) {

        let windowLength = end - start + 1;

        if(nums[end] == 1) {

            maxLength = Math.max(maxLength, windowLength);

        } else {
            start = end + 1;
        }
    }
    return console.log(maxLength)
}

consecutiveOne(nums);