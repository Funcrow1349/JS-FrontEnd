function evenOddSubtraction(arrayOfNumbers) {
    let evenSum = 0
    let oddSum = 0

    for (const element of arrayOfNumbers) {
        if (element % 2 === 0) {
            evenSum += element
        } else {
            oddSum += element
        }
    }

    let result = evenSum - oddSum
    console.log(result)
}

evenOddSubtraction([3,5,7,9])