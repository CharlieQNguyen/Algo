matrix = [[2, 5, 1, -1], [1, 3, 3, 6], [0, 5, 1, 6]];

def zeroMatrix(matrix):
    row = []
    col = []
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                row.append(i)
                col.append(j)
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i in row or j in col:
                matrix[i][j] = 0
    return matrix

answer = zeroMatrix(matrix)
print(answer)
