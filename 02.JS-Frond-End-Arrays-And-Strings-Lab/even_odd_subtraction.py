def even_odd_subtraction(list_of_numbers):
    even_sum = 0
    odd_sum = 0

    for num in list_of_numbers: 
        if num % 2 == 0:
            even_sum += num
        else:
            odd_sum += num

    diff = even_sum - odd_sum
    print(diff)

even_odd_subtraction([3,5,7,9])


# function evenOddSubtraction(arrayOfNumbers) {
#     let evenSum = 0
#     let oddSum = 0

#     for (const element of arrayOfNumbers) {
#         if (element % 2 === 0) {
#             evenSum += element
#         } else {
#             oddSum += element
#         }
#     }

#     let result = evenSum - oddSum
#     console.log(result)
# }

# evenOddSubtraction([3,5,7,9])