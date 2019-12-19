x = "blah"
y = sorted(x)

word = "abcddef"

def isUnique2(word):
    sWord = sorted(word)
    for i in range(len(word)-1):
        if sWord[i + 1] == sWord[i]:
            return False
    return True

answer = isUnique2(word)
print(answer)
