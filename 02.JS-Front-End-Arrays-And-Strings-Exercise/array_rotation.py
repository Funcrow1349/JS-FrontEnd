from collections import deque


def rotate_list(some_list, rotations):
    list_of_nums = deque(some_list)

    for i in range(rotations):
        list_of_nums.append(list_of_nums.popleft())
  
    print(" ".join(str(num) for num in list_of_nums))

rotate_list([51, 47, 32, 61, 21], 2)