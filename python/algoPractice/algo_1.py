'''
def positiveOrNegative(number):
    if number > 0:
        return "positive number "
    elif number < 0:
        return "negative number "
    else:
        return "0"


answer = input("type a number \n")
print(positiveOrNegative(answer))
'''
def printZeroToTen():
    for x in range(3, 11, 2):
        print(x)

printZeroToTen()
