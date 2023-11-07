function mineBitcoin(days) {
    const bitcoinPrice = 11949.16
    const gramOfGoldPrice = 67.51
    let totalMoney = 0
    let bitcoinsBought = 0
    let firstDay = 0

    for (let i = 0; i < days.length; i++) {
        if ((i + 1) % 3 === 0) {
            totalMoney += (days[i] * 0.70) * gramOfGoldPrice
        } else {
            totalMoney += days[i] * gramOfGoldPrice
        }

        while (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice
            bitcoinsBought += 1
            if (firstDay === 0) {
                firstDay += i + 1
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`)
    if (bitcoinsBought !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

mineBitcoin([100, 200, 300])
mineBitcoin([3124.15, 504.212, 2511.124])