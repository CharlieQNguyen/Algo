arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

function magicIndex(arr) {
  let magicIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
      magicIdx.push(arr[i]);
    }
  }
  answer =console.log(magicIdx)
  return answer;
}

magicIndex(arr);
