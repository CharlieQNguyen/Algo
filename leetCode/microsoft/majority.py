'''
    169. Majority Element

    Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

    You may assume that the array is non-empty and the majority element always exist in the array.

    Example 1:

    Input: [3,2,3]
    Output: 3
    Example 2:

    Input: [2,2,1,1,1,2,2]
    Output: 2

'''
nums = [3,2,3]
#Output: 3

def majorityElement(nums) :
    hash = {}
    for i in range(len(nums)):
        if nums[i] in hash:
            hash[nums[i]] += 1
        else:
            hash[nums[i]] = 1
    for key in hash:
        if hash[key] > len(nums)/2:
            return key
print(majorityElement(nums))

# def majorityElement(nums):
#     hash = {}
#     for i in nums:
#         if i in hash:
#             hash[i] += 1
#         else:
#             hash[i] = 1
#     for key in hash:
#         if hash[key] > len(nums)/2:
#             return key

# print(majorityElement(nums))

# for item in nums:
#     print(item)
# for i in range(len(nums)):
#     print(i)

