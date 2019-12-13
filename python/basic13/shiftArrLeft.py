arr = [1, 2, 3, 4, 5]

def shiftArrLeft(arr):
    for i in range(len(arr)-1):
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    print(arr)

shiftArrLeft(arr)
