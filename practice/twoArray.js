arr1 = [1, 2, 3];
arr2 = [1, 1, 2];

function sameNum(arr1, arr2) {
  let hash = {};
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!hash[arr1[i]]) {
      hash[arr1[i]] = 1;
    } else {
      hash[arr1[i]] += 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hash[arr2[i]]) {
      hash[arr2[i]] -= 1;
      answer.push(arr2[i]);
    }
  }
  console.log(answer);
}

sameNum(arr1, arr2);
