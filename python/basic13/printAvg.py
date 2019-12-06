arr = [1, 2, 3, 4, 5]

def printAvg(arr):
    sum = 0
    for i in range(len(arr)):
        sum += arr[i]
    avg = sum//len(arr)
    print(avg)

printAvg(arr)
