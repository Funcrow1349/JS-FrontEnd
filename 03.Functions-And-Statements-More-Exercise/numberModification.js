function modifyNumber(number) {
    let numberAsArray = String(number).split('')
    let averageValue = checkAverageValue(numberAsArray)

    function checkAverageValue(num) {
        let totalValue = 0
        for (const number of num) {
            totalValue += Number(number)
        }

        return totalValue / numberAsArray.length
    }

    while (averageValue < 5) {
        numberAsArray.push('9')
        averageValue = checkAverageValue(numberAsArray)
    }

    console.log(numberAsArray.join(""))
}
    

modifyNumber(101)
modifyNumber(5835)