def reverse_list(elements_count, list_of_numbers):
    new_list = []

    for i in range(0, elements_count):
        new_list.append(list_of_numbers[i])

    new_list.reverse()

    print(new_list)

reverse_list(3, [10, 20, 30, 40, 50])