def check_positive(num1, num2, num3):
    positive_numbers = 0
    numbers_list = [num1, num2, num3]

    for num in numbers_list:
        if num > 0:
            positive_numbers += 1

    if positive_numbers % 2 == 0:
        print('Negative')
    else:
        print('Positive')

check_positive(5, 12, -15)
check_positive(-6, -12, 14)
check_positive(-1, -2, -3)
check_positive(-5, 1, 1)
