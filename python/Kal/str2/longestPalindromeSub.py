string = "abcda"

def longestPalindromeSub(string):
    longest = ""
    # loop through string i represent midpoint
    for i in range(len(string)):
        currentLongest = ""
        for j in range(len(string)): # odds case
            left = i - j
            right = i + j
            # out of bound boundaries
            if left < 0 or right >= len(string):
                break
            else:
                if string[left] == string[right]:
                    #indexing from left to right add one because : means up to not including that character
                    currentLongest = string[left : right + 1]
                    if len(currentLongest) > len(longest):
                        longest = currentLongest
                else:
                    break
        currentLongest = ""
        for j in range(len(string)): # Evens case
            left = i - j
            # reason for plus 1 is in even condition string is even and we have to start from the middle then minimul lenght is 2 so
            # right has to start at 1
            right = i + j + 1
            if left < 0 or right >= len(string):
                break
            else:
                if string[left] == string[right]:
                    currentLongest = string[left : right + 1]
                    if(len(currentLongest) > len(longest)):
                        longest = currentLongest
                else:
                    break

    return longest

answer = longestPalindromeSub(string)
print(answer)
