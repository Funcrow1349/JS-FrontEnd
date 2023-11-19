def check_palindrome(list_of_numbers):

    def is_palindrome(number):
        number_as_string = str(number)
        reversed_string = number_as_string[::-1]
        return int(reversed_string) == number
    
    for num in list_of_numbers:
        if is_palindrome(num):
            print('true')
        else:
            print('false')

check_palindrome([123,323,421,121])
check_palindrome([32,2,232,1010])
