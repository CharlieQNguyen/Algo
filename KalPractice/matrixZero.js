matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

outcome = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

function zeroMatrix(matrix) {
    let row = {};
    let col = {};
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === 0) {
            row[i] = 1;
            col[j] = 1;
        }
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i in row === true || j in col === true) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix)
}

zeroMatrix(matrix);