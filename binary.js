arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

function singleElement(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (mid > left && mid < right) {
    if (mid % 2) {
      // odd
      if (arr[mid] == arr[mid + 1]) {
        right = mid - 1;
      } else {
        left = mid;
      }
    } else {
      //even
      if (arr[mid] == arr[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid;
      }
      mid = Math.floor((left + right) / 2);
      if (mid == left || mid == right) {
        console.log(arr[mid]);
      }
    }
  }
  console.log(mid);
}

singleElement(arr);
