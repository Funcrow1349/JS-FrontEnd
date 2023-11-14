def format_grade(grade):
    if grade < 3:
        print("Fail (2)")
    elif grade < 3.5:
        print(f'Poor ({grade:.2f})')
    elif grade < 4.5:
        print(f'Good ({grade:.2f})')
    elif grade < 5.5:
        print(f'Very good ({grade:.2f})')
    else:
        print(f'Excellent ({grade:.2f})')


format_grade(3.33)
format_grade(4.5)
format_grade(2.99)