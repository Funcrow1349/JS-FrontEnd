function printAndSum(num1, num2) {
    let stringOfNums = ""
    let totalSum = 0
    for (let i = num1; i <= num2; i++) {
        stringOfNums += i + " "
        totalSum += i
    }

    console.log(stringOfNums.trim())
    console.log(`Sum: ${totalSum}`)
}

printAndSum(5, 10)