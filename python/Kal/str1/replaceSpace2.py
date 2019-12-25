string = "this is a test"

def replaceSpace2(string):
    newString = ""
    for i in range(len(string)):
        if string[i] != " ":
            newString += string[i]
        else:
            newString += "%20"
    return newString

answer = replaceSpace2(string)
print(answer)
