arr = [2, 5, 4, 1];

function findMissing(arr) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let n = arr.length + 1;
  answer = (n * (n + 1)) / 2 - sum;
  // for(let value = 1; value <= arr.length+1; value++) {
  //   answer += value;
  // }
  // answer = answer- sum;
  // return answer
  return answer;
}

findMissing(arr);
