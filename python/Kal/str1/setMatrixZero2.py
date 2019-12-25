matrix = [[1, 5, 1, -1], [1, 3, 3, 6], [0, 5, 1, 0]];

def setMatrixZero2(matrix):
    row = dict()
    col = dict()
    dictionary = dict()
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                row[i] = True
                col[j] = True
    for i in row:
        for j in range(len(matrix[i])):
            matrix[i][j] = 0
    for j in col:
        for i in range(len(matrix)):
            matrix[i][j] = 0
    return matrix

answer = setMatrixZero2(matrix)
print(answer)
