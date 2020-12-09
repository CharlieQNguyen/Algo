/*
    167. Two Sum II - Input array is sorted

    Given an array of integers that is already sorted in ascending order, 
    find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that 
    they add up to the target, where index1 must be less than index2.

    Example 1:

    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
    Example 2:

    Input: numbers = [2,3,4], target = 6
    Output: [1,3]
    Example 3:

    Input: numbers = [-1,0], target = -1
    Output: [1,2]
*/

numbers = [2, 7, 11, 15];

target = 9;

function twoSum(numbers, target) {

    let start = 0;
    let end = numbers.length - 1;

    while(start < end) {

        let sum = numbers[start] + numbers[end];

        if(sum === target) {

            return console.log([start + 1, end + 1]);

        } else if(sum > target) {
            end--;
        } else {
            start++;
        }
    }
    console.log(result)
}
twoSum(numbers, target);