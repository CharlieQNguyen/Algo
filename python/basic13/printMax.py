arr = [3, 8, 5, 2]

def printMax(arr):
    max = 0
    for i in range(len(arr)):
        if max < arr[i]:
            max = arr[i]
    print(max)
##max(arr)
printMax(arr)
