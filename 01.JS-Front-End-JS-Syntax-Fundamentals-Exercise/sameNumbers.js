function sameNumbers(num) {
    let number = String(num)
    let lastNum = number[0]
    let sameNumbers = true
    let totalSum = Number(number[0])
    for (let i = 1; i < number.length; i++) {
        if (number[i] != lastNum) {
            sameNumbers = false
        }
        totalSum += Number(number[i])
    }
    console.log(sameNumbers)
    console.log(totalSum)
}

sameNumbers(2222222)
sameNumbers(1234)