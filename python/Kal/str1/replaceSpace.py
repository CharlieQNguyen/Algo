string = "this is a test"

def replaceSpace(string):
    stringList = string.split(" ")
    newString = ""
    for i in range(len(stringList)):
        #if the length of the list subtract 1 is i (end of list) then add
        if i == len(stringList) - 1:
            newString += stringList[i]
        else:
        # otherwise add element plus the 20%
            newString += stringList[i] + "%20"

    return newString

answer = replaceSpace(string)
print(answer)
