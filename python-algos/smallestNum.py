import random

# Algorithm to find the smalles number in a List
arr = [random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001), 
        random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001)]

def smallestNum(arr):
    sNum = None

    for num in arr:
        if sNum is None or sNum > num:
            sNum = num
    
    print(sNum)
    return sNum

smallestNum(arr)