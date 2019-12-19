str1 = "abc"
str2 = "abc"

def permutation(str1, str2):
    dictionary = dict()
    if len(str1) != len(str2):
        return False
    for i in range(len(str1)):
        if str1[i] in dictionary:
            dictionary[str1[i]] += 1
        else:
            dictionary[str1[i]] = 1
    for i in range(len(str2)):
        if str2[i] in dictionary:
            dictionary[str2[i]] -= 1
        else:
            return False
    for key in dictionary:
        if dictionary[key] != 0:
            return False
    return True

answer = permutation(str1, str2)
print(answer)
