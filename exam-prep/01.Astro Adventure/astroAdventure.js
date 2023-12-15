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
    console.log(commandLine)

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
            // TODO...
        } else if (action === "Breathe") {
            // TODO...
        }

        commandLine = input.shift()
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