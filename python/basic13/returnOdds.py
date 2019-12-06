def returnOddArr():
    arr = []
    for i in range(1, 256):
        if i % 2 != 0:
            arr.append(i)
    print(arr)

returnOddArr()
