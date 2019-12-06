arr = [100, 200, 300, 400, 500]
y = 3

def countGreaterY(arr, y):
    count = 0
    value = []
    for i in range(len(arr)):
        if arr[i] > y:
            count += 1
            value.append(arr[i])
    print(count, value)

countGreaterY(arr, y)
