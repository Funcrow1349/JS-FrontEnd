function washCar(arrayOfActions) {
    let value = 0

    for (const action of arrayOfActions) {
        if (action === 'soap') {
            value += 10
        } else if (action === 'water') {
            value *= 1.20
        } else if (action === 'vacuum cleaner') {
            value *= 1.25
        } else if (action === 'mud') {
            value *= 0.90
        } 
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

washCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
washCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])