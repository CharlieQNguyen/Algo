string = "aabccccaaa"
output = "a2b1c4a3"

def stringCompress(string):
    string2 = ""
    count = 1
    for i in range(len(string)-1):
        if string[i] == string[i+1]:
            count += 1
        else:
            string2 += string[i] + str(count)
            count = 1
    string2 += string[i] + str(count)
    return string2

answer = stringCompress(string)
print(answer)
