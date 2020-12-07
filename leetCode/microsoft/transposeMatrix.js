/*

    867. Transpose Matrix

    Given a matrix A, return the transpose of A.

    The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

    Example 1:

    Input = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    Output: [
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ]
    Example 2:

    Input: [
        [1,2,3],
        [4,5,6]
    ]

    Output: [
        [1,4],
        [2,5],
        [3,6]]
*/

// j = row;
// i = column
matrix = [
    [1, 2, 3], //0 
    [4, 5, 6], //1
    [7, 8, 9], //2
];

/*
    i = 0
        j = 0 : 1
        j = 1 : 4
        j = 2 : 7
    i = 1
        j = 0 : 2
        j = 1 : 5;
        j = 2 : 8;
    i = 2
        j = 0 : 3
        j = 1 : 6;
        j = 2 : 9
*/

Output: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
];

function transposeMatrix(matrix) {

    let resultMatrix = [];

    for(let i = 0; i < matrix[0].length; i++) {
        let obtainedArray = [];
        for(let j = 0; j < matrix.length; j++) {
            obtainedArray.push(matrix[j][i])
        }
        resultMatrix.push(obtainedArray)
    }
    return console.log(resultMatrix)
}

transposeMatrix(matrix);