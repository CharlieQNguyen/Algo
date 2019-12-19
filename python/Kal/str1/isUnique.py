word = "abcdef"

def isUnique(word):
    # check if word is of type string
    if not isinstance(word, str):
        raise ValueError(str(word) + " is not of type str.")
    dictionary = dict()
    #loop through string
    for i in range(len(word)):
        #if i in dictionary then return false
        if word[i] in dictionary:
            return False
        else:
            dictionary[word[i]] = 1
    return True

'''
answer = isUnique("abcd")
print(answer)
answer = isUnique("abccd")
print(answer)
answer = isUnique(3.14159)
print(answer)
'''

def testIsUnique():
    x = isUnique("abcd")
    assert(x == True)
    x = isUnique("blahblah")
    assert(x == False)

    try:
        x = isUnique([1,2,3])
        assert(False)
    except ValueError as e:
        assert(True)

testIsUnique()


def prod(x,y):
    try:
        return x*y
    except Exception as e:
        raise ValueError(str(x) + " and " + str(y) + " cannot be multiplied.")
