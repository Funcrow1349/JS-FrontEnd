function fruit(typeOfFruit, grams, price) {
    let kg = grams / 1000
    let moneyNeeded = kg * price
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeOfFruit}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
fruit('banana', 700, 1.20)