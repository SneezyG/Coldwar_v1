def twoSum(nums, target):
    # finding two numbers in nums that adds up to target
    for a, x in enumerate(nums):
        for b, y in enumerate(nums):
            if a != b and (x+y) == target:
                return [a, b]
    else:
        return None

# testing the search logic with assert
indexes = twoSum([2, 3, 4, 6], 7)
assert indexes == [1, 2] 
assert indexes != [2, 3]
#assert indexes == None, "one test failed, indexes can not be none"
print("All test passed")