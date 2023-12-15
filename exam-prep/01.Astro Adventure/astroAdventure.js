function solve(input) {
    const astronautsCount = Number(input.shift())
    const astronauts = {}

    for (let index = 0; index < astronautsCount; index++) {
        const [astronautName, oxygenLevel, energyReserves] = input.shift().split(" ")
        
        astronauts[astronautName] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(energyReserves),
        }  
    }

    let commandLine = input.shift()

    while (commandLine !== "End") {
        let [action, name, amount] = commandLine.split(" - ")

        if (action === "Explore") {
            const energyNeeded = Number(amount)
            if (energyNeeded <= astronauts[name].energyReserves) {
                astronauts[name].energyReserves -= energyNeeded
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energyReserves} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }

        } else if (action === "Refuel") {
            let amountToRefuel = Number(amount)
            const currentFuel = astronauts[name].energyReserves
            const totalFuel = amountToRefuel + currentFuel
            const excessFuel = totalFuel - 200
            if (excessFuel > 0) {
                amountToRefuel -= excessFuel
            }
            
            astronauts[name].energyReserves += amountToRefuel
            console.log(`${name} refueled their energy by ${amountToRefuel}!`)

        } else if (action === "Breathe") {
            let amountToBreathe = Number(amount)
            const currentOxygen = astronauts[name].oxygenLevel
            const totalOxygen = amountToBreathe + currentOxygen
            const excessOxygen = totalOxygen - 100
            if (excessOxygen > 0) {
                amountToBreathe -= excessOxygen
            }

            astronauts[name].oxygenLevel += amountToBreathe
            console.log(`${name} took a breath and recovered ${amountToBreathe} oxygen!`)
        }

        commandLine = input.shift()
    }

    for (const astronaut in astronauts) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserves}`) 
        }
    
}

solve([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End'])