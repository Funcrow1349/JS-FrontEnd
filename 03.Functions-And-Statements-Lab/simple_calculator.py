def calculator(num1, num2, operator):
    operations = {
        'add': lambda a, b: a + b,
        'subtract': lambda a, b: a - b,
        'multiply': lambda a, b: a * b,
        'divide': lambda a, b: a / b,
    }

    print(operations[operator](num1, num2))

calculator(5, 5, "multiply")
calculator(40, 8, "divide")
calculator(12, 19, "add")
calculator(50, 13, "subtract")