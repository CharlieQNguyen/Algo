arr = [3, 1, 4, 1, 5, 9];

function sum(arr) {
  //basecase
  if (arr.length === 0) {
    return 0;
  }
  //main case
  return arr[0] + sum(arr.slice(1));
}

sum(arr);
