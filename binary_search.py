def binarySearch(arr, target):
    length = len(arr)
    if length == 0:
        return False
    
    midIdx = int(length / 2)
    left = arr[0:midIdx]
    right = arr[midIdx + 1:]

    if arr[midIdx] > target:
        return binarySearch(left, target)
    elif arr[midIdx] < target:
        return binarySearch(right, target)
    else:
        return True

li = [-4, 0, 1, 12, 14, 19, 21, 24, 30, 38, 51]

print(binarySearch(li, 12)) # True
print(binarySearch(li, 30)) # True
print(binarySearch(li, 3)) # False
print(binarySearch(li, 28)) # False
