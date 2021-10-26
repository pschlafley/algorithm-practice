import random
# Algorithm to find and return the largest number in the List
arr = [random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001), random.randint(0, 1001)]

def highestNum(arr):
    lNum = arr[0]

    for i in arr:
        if lNum < i:
            lNum = i

    print(lNum)
    return lNum       

highestNum(arr)