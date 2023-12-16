function cafeteria(input) {
    const baristaCount = Number(input.shift())

    const baristas = {}

    for (let index = 0; index < baristaCount; index++) {
        let currentBaristaInfo = input.shift().split(" ")

        const baristaName = currentBaristaInfo[0]
        const shift = currentBaristaInfo[1]
        const drinks = currentBaristaInfo[2].split(",")
        
        baristas[baristaName] = {
            shift,
            drinks,
        }
        
    }

    let currentCommandLine = input.shift()

    while (currentCommandLine !== "Closed") {

        const [action, barista, arg3, arg4] = currentCommandLine.split(" \/ ")

        if (action === "Prepare") {
            const shift = arg3
            const coffeeType = arg4

            if (baristas[barista].shift === shift && baristas[barista].drinks.includes(coffeeType)) {
                console.log(`${barista} has prepared a ${coffeeType} for you!`)
            } else {
                console.log(`${barista} is not available to prepare a ${coffeeType}.`)
            }

        } else if (action === "Change Shift") {
            const newShift = arg3

            baristas[barista].shift = newShift
            console.log(`${barista} has updated his shift to: ${newShift}`)

        } else if (action === "Learn") {
            const newCoffeeType = arg3

            if (baristas[barista].drinks.includes(newCoffeeType)) {
                console.log(`${barista} knows how to make ${newCoffeeType}.`)
            } else {
                baristas[barista].drinks.push(newCoffeeType)
                console.log(`${barista} has learned a new coffee type: ${newCoffeeType}.`)
            }
        }

        currentCommandLine = input.shift()
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista].shift}, Drinks: ${baristas[barista].drinks.join(", ")}`)
    }

}


cafeteria([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed'],
    )