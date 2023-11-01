function gatherSpice(initialYield) {
    let yield = initialYield
    let spiceMined = 0
    let totalDays = 0

    while (yield >= 100) {
        spiceMined += yield - 26
        totalDays += 1
        yield -= 10
    }

    if (spiceMined >= 26){
        spiceMined -= 26
    } else {
        spiceMined -= spiceMined
    }
    
    console.log(totalDays)
    console.log(spiceMined)
}

gatherSpice(111)
gatherSpice(450)