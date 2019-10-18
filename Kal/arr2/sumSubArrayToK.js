arr = [1, 4, 20, 3, 10, 5];
k = 23;

function sumSubArrayToK(arr, k) {
    let sum = 0;
    let endIndex = null;
    let preSum = { 0: 1 };

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (preSum[sum - k]) {
        endIndex = i;
        break;
      }
      // increment preSum[sum] by 1 if we dont default to zero then it's going to be undefined + 1
      preSum[sum] = (preSum[sum] || 0) + 1;
    }

    if (endIndex === null) {
        return endIndex;
    }

    sum = 0;
    let startIndex = null;
    for (let i = endIndex; i >= 0; i--) {
        sum += nums[i];
        if (sums === k) {
            startIndex = i;
            break;
        }
    }

    return [startIndex, endIndex];
}