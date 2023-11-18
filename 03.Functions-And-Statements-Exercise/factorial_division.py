def divide_factorials(num1, num2):
    def calculate_factorial(number):
        i = 1
        result = 1

        while number != i: 
            result *= i + 1
            i += 1

        return result
    
    first_number = calculate_factorial(num1)
    second_number = calculate_factorial(num2)

    final_result = first_number / second_number

    print(f"{final_result:.2f}")



divide_factorials(5, 2)
divide_factorials(6, 2)