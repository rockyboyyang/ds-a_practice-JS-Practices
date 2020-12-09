def merge(arr1, arr2):
    merge = []

    arr1Len = len(arr1)
    arr2Len = len(arr2)

    while(arr1Len != 0 or arr2Len != 0):
        arr1First = None
        arr2First = None
        nextUp = None

        if arr1Len != 0:
            arr1First = arr1[0]
        else:
            arr1First = float('inf')
        
        if arr2Len != 0:
            arr2First = arr2[0]
        else:
            arr2First = float('inf')

        if arr1First < arr2First:
            nextUp = arr1.pop(0)
            arr1Len -= 1
        else:
            nextUp = arr2.pop(0)
            arr2Len -= 1

        merge.append(nextUp)

    return merge

def mergeSort(arr):
    length = len(arr)
    if length <= 1:
        return arr

    midIdx = int(length / 2)

    leftArr = arr[0:midIdx]
    rightArr = arr[midIdx:]

    leftSorted = mergeSort(leftArr)
    rightSorted = mergeSort(rightArr)

    return merge(leftSorted, rightSorted)


# print(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))
print(mergeSort([10, -2, 1, 0, -14, 4, 9, 6, 14, -40, 43, 41, -21]))


