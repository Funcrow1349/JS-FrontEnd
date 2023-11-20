def modify_number(number):

    def check_average_value(num):
        total_value = 0
        for n in num: 
            total_value += int(n)
        
        return total_value / len(number_as_list)
    
    number_as_string = str(number)
    number_as_list = list(number_as_string)
    average_value = check_average_value(number_as_list)


    while average_value < 5:
        number_as_list.append('9')
        average_value = check_average_value(number_as_list)

    print("".join(number_as_list))

modify_number(101)
modify_number(5835)