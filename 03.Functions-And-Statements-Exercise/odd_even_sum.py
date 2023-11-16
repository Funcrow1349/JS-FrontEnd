def odd_even_sum(number):
    number_as_string = str(number)
    odd_sum = 0
    even_sum = 0

    for num in number_as_string:
        if int(num) % 2 == 0:
            even_sum += int(num)
        else:
            odd_sum += int(num)

    print(f"Odd sum = {odd_sum}, Even sum = {even_sum}")


odd_even_sum(1000435)
odd_even_sum(3495892137259234)
