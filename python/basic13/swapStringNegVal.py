arr = [-1, 2, -3, 4, -5]

def swapStringNegVal(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = "KOF"
    print(arr)

swapStringNegVal(arr)
