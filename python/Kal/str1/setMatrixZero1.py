matrix = [[1, 5, 1, -1], [1, 3, 3, 6], [0, 5, 1, 0]];

def setMatrixZero1(matrix):
    row = []
    col = []
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                row.append(i)
                col.append(j)
    for i in row:
        for j in range(len(matrix[i])):
            #zero out whole row
            matrix[i][j] = 0
    for j in col:
        for i in range(len(matrix)):
            matrix[i][j] = 0
    return matrix

answer = setMatrixZero1(matrix)
print(answer)
