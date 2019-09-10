matrix = [[2, 5, 1, 0], [1, 3, 3, 6], [0, 5, 1, 6]];

function zeroMatrix(matrix) {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    const currArray = matrix[i];
    console.log(currArray);
    for (let j = 0; j < currArray.length; j++) {
      console.log(currArray[j]);
      if (currArray[j] === 0) {
      }
    }
  }
}

zeroMatrix(matrix);
