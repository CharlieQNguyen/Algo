const arr = [1,4,6,7,14,18,29,35,47];
const target = 3;

// Use binary search to find the target, return index if found or return -1 iuf not found
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(target === arr[mid]) {
            return mid;
        } else if(target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
}

console.log(binarySearch(arr,target));