arr = [2, 3, 4, 5, -1]

def minMaxAvg(arr):
    max = float("-inf")
    min = float("inf")
    sum = 0
    for i in range(len(arr)):
        sum += arr[i]
        if arr[i] > max:
            max = arr[i]
        elif arr[i] < min:
            min = arr[i]
        avg = sum/len(arr)
    print("this is the "+str(max),(min),avg)

minMaxAvg(arr)
