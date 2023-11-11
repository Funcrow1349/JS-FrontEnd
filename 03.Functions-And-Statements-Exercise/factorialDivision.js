function divideFactorials(num1, num2) {

    function calculateFactorial(number) {
        let i = 1
        let result = 1

        while (number != i) {
            result *= i + 1
            i += 1
        }

        return result
    }

    firstNumber = calculateFactorial(num1)
    secondNumber = calculateFactorial(num2)

    console.log((firstNumber / secondNumber).toFixed(2))

}

divideFactorials(5, 2)
divideFactorials(6, 2)