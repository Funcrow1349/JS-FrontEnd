function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0
    let shieldBroken = 0

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            totalCost += helmetPrice + swordPrice
            shieldBroken += 1
            totalCost += shieldPrice
            if (shieldBroken % 2 == 0) {
                totalCost += armorPrice
            }
        } else if (i % 2 == 0) {
            totalCost += helmetPrice
        } else if (i % 3 == 0) {
            totalCost += swordPrice
        }
    }
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}

calculateExpenses(7, 2, 3, 4, 5)
calculateExpenses(23, 12.50, 21.50, 40, 200)