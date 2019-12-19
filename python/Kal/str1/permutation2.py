str1 = "abb"
str2 = "abc"

def permutation2(str1, str2):
    if len(sortw1) != len(sortw2):
        return False
    sortw1 = sorted(str1)
    sortw2 = sorted(str2)
    for i in range(len(sortw1)):
        if sortw1[i] != sortw2[i]:
            return False
    return True

answer = permutation2(str1, str2)
print(answer)
