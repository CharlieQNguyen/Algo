
function triplet_sum_close_to_target(arr, targetSum) {
Input: [-2, 0, 1, 2], (target = 2);
Output: 1;
    arr.sort((a, b) => a - b);
    // arr = [-2, 0, 1, 2]
    let smallest_difference = Infinity;
    // smallest_difference = 2
    // smallest_difference = 1
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1,

        right = arr.length - 1;

        // arr   = [-2, 0, 1, 2]
        // index =   0  1  2  3        
        while (left < right) {
            // arr   = [-2,  0,  1,  2]

            // index =   0   1   2   3
            //           i   L       R
            //           i       L   R
            //           i           L/R
            //TargetDi=  2 - (-2 + 0 + 2) = 2    
            //TargetDi=  2 - (-2 + 1 + 2) = 1
            
            // arr   = [-2,  0,  1,  2]

            // index =   0   1   2   3

            //               i   L   R
            //               i   L/R  
            //TargetDi=  2 - (0 + 1 + 2) = -1
            
            // arr   = [-2,  0,  1,  2]

            // index =   0   1   2   3
            //                   i
            const target_diff = targetSum - (arr[i] + arr[left] + arr[right]); // find difference between targetSum and the triplets
            if (target_diff === 0) {
                // we've found a triplet with an exact sum
                return targetSum - target_diff; // return sum of all the numbers (basically returning the sum of what all the 3 pointers add up to)
            }
            //          2             <           Infinity
            //          1             <               2

            //          1             !<              1
            if (Math.abs(target_diff) < Math.abs(smallest_difference)) { // how far is it away from 0 abs
                smallest_difference = target_diff; // save the closest difference
            //  smallest_difference = 2
            //  smallest_difference = 1


            }
            // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
            //          2             !<              2
            //          1             !<              1

            //          1             <               1
            if (Math.abs(target_diff) < Math.abs(smallest_difference) || (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
                smallest_difference = target_diff; // save the closest and the biggest difference
            }
            //        2     > 0
            //        1     > 0

            //       -1     > 0
            if (target_diff > 0) {
                left += 1; // we need a triplet with a bigger sum
            } else {
                right -= 1; // we need a triplet with a smaller sum
            }
        }
    } 
    return targetSum - smallest_difference;
    //         2     -        1      = 1  
}
