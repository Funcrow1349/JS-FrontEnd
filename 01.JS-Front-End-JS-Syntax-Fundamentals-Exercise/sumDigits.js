function sumDigits(num) {
    let numAsString = String(num)
    totalSum = 0

    for (let i = 0; i < numAsString.length; i++) {
        totalSum += Number(numAsString[i])
    }
    console.log(totalSum)
}

sumDigits(12345)