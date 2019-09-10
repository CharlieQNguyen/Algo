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




// matrix = [[2, 5, 1, 0], [1, 3, 3, 6], [0, 5, 1, 6]];

// function zeroMatrix(matrix) {
//   let rows0 = [];
//   let cols0 = [];

//   for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//     const currArray = matrix[rowIndex];
//     //console.log(currArray)
//     for (let colIndex = 0; colIndex < currArray.length; colIndex++) {
//       //console.log(currArray[colIndex])
//       if (currArray[colIndex] === 0) {
//         rows0.push(rowIndex);
//         cols0.push(colIndex);
//       }
//     }
//   }
//   console.log(rows0, cols0);
//   // for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//   //   const currArray = matrix[rowIndex]
//   //   for(let colIndex = 0; colIndex < currArray.length; colIndex++) {
//   //     for(rowIndex in rows0) {
//   //       matrix[rowIndex][colIndex] = 0;
//   //     }
//   //     for(colIndex in cols0) {
//   //       matrix[rowIndex][colIndex] = 0;
//   //     }
//   //   }
//   // }

//   for (let i = 0; i < rows0.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       matrix[rows0[i]][j] = 0;
//     }
//   }
//   for (let i = 0; i < cols0.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[j][cols0[i]] = 0;
//     }
//   }
//   return matrix;
// }

// zeroMatrix(matrix);
