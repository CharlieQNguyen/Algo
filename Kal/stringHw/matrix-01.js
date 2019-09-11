matrix = [[2, 5, 1, 0], [1, 3, 3, 6], [0, 5, 1, 6]];

function zeroMatrix(matrix) {
  let row = [];
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row.includes(i) || col.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

 zeroMatrix(matrix);


// matrix = [[2, 5, 1, 0], [1, 3, 3, 6], [0, 5, 1, 6]];

// function zeroMatrix(matrix) {
//   let row = [];
//   let col = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         row.push(i);
//         col.push(j);
//       }
//     }
//   }
//   for (r in row) {
//     let targetRow = matrix[row[r]];
//     //console.log(targetRow);
//     for (let j = 0; j < targetRow.length; j++) {
//       targetRow[j] = 0;
//     }
//   }
//   for (c in col) {
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[j][col[c]] = 0;
//     }
//   }
//   return matrix;
// }

// zeroMatrix(matrix);