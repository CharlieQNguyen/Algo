arr = [-1, 3, 4, 5, -6, -2]

def zeroOutNeg(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = 0
    return print(arr)

zeroOutNeg(arr)
