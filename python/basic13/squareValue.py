arr = [1, 2, 3, 4, 5]

def squareValue(arr):
    for i in range(len(arr)):
        arr[i] = arr[i]* arr[i]
    print(arr)

squareValue(arr)
